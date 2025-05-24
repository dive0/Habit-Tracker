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

