// firestore.js
import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const addCardItem = async (userId, cardTitle, name, cashflowAmount) => {
  try {
    await addDoc(collection(db, "cardItems"), {
      userId,
      cardTitle,
      name,
      cashflowAmount,
    });
  } catch (error) {
    console.error("Fehler beim Hinzufügen des Elements: ", error);
  }
};

export const fetchCardItems = async (userId, cardTitle) => {
  try {
    const q = query(
      collection(db, "cardItems"),
      where("userId", "==", userId),
      where("cardTitle", "==", cardTitle),
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Fehler beim Abrufen der Elemente: ", error);
  }
};
