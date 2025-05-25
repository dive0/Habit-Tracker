import { firestore } from "./firebase";
import { collection } from "@firebase/firestore";

export const habitRef = collection(firestore, "habits");
