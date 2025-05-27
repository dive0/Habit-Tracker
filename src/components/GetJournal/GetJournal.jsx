import { firestore } from "../../libs/firebase";
import { collection, getDocs } from "@firebase/firestore";

export async function getJournal() {
  const habitRef = collection(firestore, "Journal");
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

export default getJournal;