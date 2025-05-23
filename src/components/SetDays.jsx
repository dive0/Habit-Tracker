import { db } from '../firebase'; // Adjust the import path as needed
import { doc, setDoc } from 'firebase/firestore';

/**
 * Sets habit information to Firestore under the given user and habit ID.
 * @param {string} habitId - The habit's unique ID.
 * @param {Object} hit - The habit data to store.
 * @returns {Promise<void>}
 */
export async function setHabitInfo(habitId, hit) {
    try {
        const habitRef = doc(db, 'habits', habitId);
        await setDoc(habitRef, hit, { merge: true });
        console.log('Habit information set successfully');
    } catch (error) {
        console.error('Error setting habit information:', error);
        throw error;
    }
}