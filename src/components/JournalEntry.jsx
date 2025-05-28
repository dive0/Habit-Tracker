import React, { useRef, useEffect, useState } from "react";
import { journalCollectionRef } from "../libs/firestore.collection";
import { setDoc, doc, query, where, getDocs, updateDoc } from "@firebase/firestore";
import "./JournalEntry.css";

const JournalEntry = ({ uniqueId }) => {
  const newjournalRef = useRef();
  const [entries, setEntries] = useState([]);
  const [editingIdx, setEditingIdx] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  // Fetch entries with matching uniqueId
  useEffect(() => {
    async function fetchEntries() {
      const q = query(journalCollectionRef, where("uniqueId", "==", uniqueId));
      const snapshot = await getDocs(q);
      // Save both data and doc id for editing
      const data = snapshot.docs.map(docSnap => ({ ...docSnap.data(), docId: docSnap.id }));
      setEntries(data);
    }
    if (uniqueId) fetchEntries();
  }, [uniqueId]);

  const handleAddHabit = async (e) => {
    e.preventDefault();

    let data = {
      habit:
        String(newjournalRef.current.value).charAt(0).toUpperCase() +
        String(newjournalRef.current.value).slice(1),
      uniqueId: uniqueId,
    };

    newjournalRef.current.value = "";

    try {
      const habitDoc = doc(journalCollectionRef);
      await setDoc(habitDoc, data);
      // Refresh entries after adding
      const q = query(journalCollectionRef, where("uniqueId", "==", uniqueId));
      const snapshot = await getDocs(q);
      const dataArr = snapshot.docs.map(docSnap => ({ ...docSnap.data(), docId: docSnap.id }));
      setEntries(dataArr);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (idx) => {
    setEditingIdx(idx);
    setEditingValue(entries[idx].habit);
  };

  const handleSave = async (docId) => {
    try {
      const entryRef = doc(journalCollectionRef, docId);
      await updateDoc(entryRef, { habit: editingValue });
      // Refresh entries after update
      const q = query(journalCollectionRef, where("uniqueId", "==", uniqueId));
      const snapshot = await getDocs(q);
      const dataArr = snapshot.docs.map(docSnap => ({ ...docSnap.data(), docId: docSnap.id }));
      setEntries(dataArr);
      setEditingIdx(null);
      setEditingValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="journal-entry-bottom-bar">
      <form onSubmit={handleAddHabit} className="journal-entry-form">
        <label htmlFor="newHabit">
          New Journal Entry
        </label>
        <input
          type="text"
          ref={newjournalRef}
          className="journal-entry-input"
        />
        <button type="submit" className="journal-entry-button">
          Add Entry
        </button>
      </form>
      <div>
        <h4>Entries for this day:</h4>
        <ul>
          {entries.map((entry, idx) => (
            <li key={entry.docId}>
              {editingIdx === idx ? (
                <>
                  <input
                    value={editingValue}
                    onChange={e => setEditingValue(e.target.value)}
                    className="journal-entry-input"
                    style={{ width: "200px", marginRight: "10px" }}
                  />
                  <button
                    className="journal-entry-button"
                    onClick={() => handleSave(entry.docId)}
                  >
                    Save
                  </button>
                  <button
                    className="journal-entry-button"
                    onClick={() => setEditingIdx(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {entry.habit}
                  <button
                    className="journal-entry-button"
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleEdit(idx)}
                  >
                    Edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JournalEntry;