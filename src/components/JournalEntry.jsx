import React, { useRef } from "react";
import { journalCollectionRef } from "../libs/firestore.collection";
import { setDoc, doc } from "@firebase/firestore";
import "./JournalEntry.css";

const JournalEntry = () => {
  const newjournalRef = useRef();

  const handleAddHabit = async (e) => {
    e.preventDefault();

    let data = {
      habit:
        String(newjournalRef.current.value).charAt(0).toUpperCase() +
        String(newjournalRef.current.value).slice(1),
    };

    newjournalRef.current.value = "";

    try {
      const habitDoc = doc(journalCollectionRef);
      await setDoc(habitDoc, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="journal-entry-bottom-bar">
      <form onSubmit={handleAddHabit} className="journal-entry-form">
        <label htmlFor="newHabit" >
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
    </div>
  );
};

export default JournalEntry;