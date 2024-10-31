import { getDatabase, ref, update } from "firebase/database"

import { auth, firebaseApp } from "@/app/utils/firebaseConfig"

import type { ListItemProps } from "../components/BigCard/ListItem.types"
import { determineItemsRef } from "./globals"

export const editCardItemFromDatabase = async (
  itemId: string,
  updatedName: string,
  updatedCashflowAmount: number,
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
    if (typeof itemId !== "string") {
      throw new Error("itemId must be a string")
    }

    const db = getDatabase(firebaseApp)
    const itemRef = ref(
      db,
      `users/${user.uid}/${determineItemsRef(cardTitle)}/${itemId}`
    )

    await update(itemRef, {
      name: updatedName,
      cashflowAmount: updatedCashflowAmount,
    })

    console.log("Item successfully updated")

    setCardItems(
      cardItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              name: updatedName,
              cashflowAmount: updatedCashflowAmount,
            }
          : item
      )
    )
  } catch (error) {
    console.error("Error updating item:", error)
  }
}
