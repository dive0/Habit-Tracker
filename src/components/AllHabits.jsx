import { useState, useEffect } from "react";
import { habitRef } from "../libs/firestore.collection";
import { getDocs } from "@firebase/firestore";

const AllHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetchHabits();
  }, []);

  useEffect(() => {
    console.log(habits);
  }, [habits]);

  const fetchHabits = async () => {
    getDocs(habitRef)
      .then((snapshot) => {
        setHabits(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
      .catch((err) => console.log("Error getting documents:", err));
  };

  return (
    <div>
      {habits.map((habit) => (
        <li key={habit.id}>{habit.habit}</li>
      ))}
    </div>
  );
};
export default AllHabits;
