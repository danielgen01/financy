import { getDatabase, ref, remove } from "firebase/database"

import { auth, firebaseApp } from "@/app/utils/firebaseConfig"

import type { ListItemProps } from "../components/BigCard/ListItem.types"
import { determineItemsRef } from "./globals"

export const removeCardItemFromDataBase = (
  itemId: any,
  cardTitle: string | undefined,
  setCardItems: React.Dispatch<React.SetStateAction<ListItemProps[]>>,
  cardItems: ListItemProps[]
) => {
  const user = auth.currentUser
  if (!user) {
    console.error("User is not authenticated")
    return
  }

  try {
    const db = getDatabase(firebaseApp)
    remove(
      ref(db, `users/${user.uid}/${determineItemsRef(cardTitle)}/${itemId}`)
    )
    console.log("Item successfully removed")
    setCardItems(cardItems?.filter((item) => item.id !== itemId))
  } catch (error) {
    console.error("Error removing item:", error)
  }
}
