import React, { useRef } from "react";
import { habitRef } from "../libs/firestore.collection";
import { setDoc, doc } from "@firebase/firestore";

const NewHabitForm = () => {
  const newHabitRef = useRef();

  const handleAddHabit = async (e) => {
    e.preventDefault();

    let data = {
      habit:
        String(newHabitRef.current.value).charAt(0).toUpperCase() +
        String(newHabitRef.current.value).slice(1),
    };

    newHabitRef.current.value = "";

    try {
      const habitDoc = doc(habitRef);
      await setDoc(habitDoc, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleAddHabit}>
        <label htmlFor="newHabit">New Habit</label>
        <input type="text" ref={newHabitRef} />
        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
};

export default NewHabitForm;
