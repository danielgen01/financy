import { firebaseApp, getFirebaseData } from "@/app/utils/firebaseConfig"
import { determineItemsRef } from "./useBigCard"
import { ListItemProps } from "./ListItem.types"
import { getDatabase, push, ref } from "firebase/database"

export const fetchCardItemsFromDatabase = async (
  cardTitle: string | undefined,
  setCardItems: React.Dispatch<React.SetStateAction<ListItemProps[]>>
) => {
  try {
    const data = await getFirebaseData(determineItemsRef(cardTitle))
    if (data) {
      const cardItemsWithIds = Object.entries<any>(data).map(([id, item]) => ({
        id: id,
        ...item,
      }))
      setCardItems(cardItemsWithIds)
    }
  } catch (error) {
    console.error("Error fetching data from Firebase:", error)
  }
}

export const addCardItemToDataBase = async (
  name: string,
  cashflowAmount: number,
  cardTitle: string | undefined,
  setCardItems: React.Dispatch<React.SetStateAction<ListItemProps[]>>,
  cardItems: ListItemProps[]
) => {
  try {
    const db = getDatabase(firebaseApp)
    const newItemRef = push(ref(db, determineItemsRef(cardTitle)), {
      name: name,
      cashflowAmount: cashflowAmount,
    })

    const newItemKey = newItemRef.key // Schlüssel von der Datenbank erhalten

    // Überprüfen, ob newItemKey definiert ist
    if (newItemKey) {
      const newCardItem: ListItemProps = {
        name: name,
        cashflowAmount: cashflowAmount,
        id: newItemKey,
      }

      setCardItems([...cardItems, newCardItem])
    } else {
      console.error("Schlüssel wurde nicht von der Datenbank erhalten")
    }
  } catch (error) {
    console.error("Fehler beim Hinzufügen des Elements: ", error)
  }
}
