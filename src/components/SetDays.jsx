import React, { useRef } from "react";
import { firestore } from "../firebase";
import { setDoc, collection, doc, getDocs } from "@firebase/firestore";



export function getHabit() {
    const habitRef = collection(firestore, "Habit");
    getDocs(habitRef)
        .then((snapshot) => {
            let habitData = [];
            snapshot.docs.forEach((doc) => {
                habitData.push({ ...doc.data(), id: doc.id });
            });
            console.log(habitData);

        })
        .catch((error) => {
            console.log("Error getting documents:", error);
        });
}

// add day ID
export function SetDays(idx,i) {
    const addHabit = document.querySelector("addHabit")
    addHabit.addEventListener("submit", (e) => {
        e.preventDefault();
       setDoc(firestore, {
            habit: addHabit.idx.value,
            day: addHabit.i.value
            
       })
        console.log("added")
        addHabit.reset();
    });
}


