import { firestore } from "./firebase";
import { collection } from "@firebase/firestore";

export const habitCollectionRef = collection(firestore, "habits");
