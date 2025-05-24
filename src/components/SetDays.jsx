import React, { useRef } from "react";
import { firestore } from "../firebase";
import { setDoc, collection, doc, getDocs } from "@firebase/firestore";
import { initializeApp } from "firebase/app";


const db = getFirestore(); 

export function getHabit() {
    const habitRef = collection(db, "Habit");
    getDocs(habitRef)
        .then((snapshot) => {
            console.log(snapshot.docs);

        })
        .catch((error) => {
            console.log("Error getting documents:", error);
        });
}

