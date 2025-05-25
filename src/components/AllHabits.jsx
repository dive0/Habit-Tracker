import { useState, useEffect } from "react";
import { habitCollectionRef } from "../libs/firestore.collection";
import { onSnapshot } from "@firebase/firestore";

const AllHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(habitCollectionRef, (snapshot) => {
      setHabits(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {habits.map((habit) => (
        <li key={habit.id}>{habit.habit}</li>
      ))}
    </div>
  );
};
export default AllHabits;
