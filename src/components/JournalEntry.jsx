import React, { useRef, useEffect, useState } from "react";
import { journalCollectionRef } from "../libs/firestore.collection";
import { setDoc, doc, query, where, getDocs } from "@firebase/firestore";
import "./JournalEntry.css";

const JournalEntry = ({ uniqueId }) => {
  const newjournalRef = useRef();
  const [entries, setEntries] = useState([]);

  // Fetch entries with matching uniqueId
  useEffect(() => {
    async function fetchEntries() {
      const q = query(journalCollectionRef, where("uniqueId", "==", uniqueId));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
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
      const dataArr = snapshot.docs.map((doc) => doc.data());
      setEntries(dataArr);
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
            <li key={idx}>{entry.habit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JournalEntry;