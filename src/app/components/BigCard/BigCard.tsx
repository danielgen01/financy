import React, { useEffect, useState } from "react"
import {
  getDatabase,
  ref,
  push,
  remove,
  onValue,
  update,
} from "firebase/database"
import { AddCircleOutline } from "@mui/icons-material"
import { ListItem } from "./ListItem"
import { BigCardProps } from "./BigCard.types"
import { ListItemProps } from "./ListItem.types"
import { firebaseApp, getFirebaseData } from "@/app/utils/firebaseConfig"
import { Dialog } from "../Dialog/Dialog"
import styles from "./BigCard.styles.module.css"
import { Button } from "@mui/material"
import { determineItemsRef, determineTotal } from "./useBigCard"

export const BigCard: React.FC<BigCardProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
  isFourColumns,
}) => {
  const [cardItems, setCardItems] = useState<ListItemProps[]>(listItems || [])
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const handleClose = () => {
    setOpenDialog(false)
  }

  const handleOpen = () => {
    setOpenDialog(true)
  }

  const fetchCardItemsFromDatabase = async () => {
    try {
      const data = await getFirebaseData(determineItemsRef(cardTitle))
      if (data) {
        const cardItemsWithIds = Object.entries<any>(data).map(
          ([id, item]) => ({
            id: id,
            ...item,
          })
        )
        setCardItems(cardItemsWithIds)
      }
    } catch (error) {
      console.error("Error fetching data from Firebase:", error)
    }
  }

  // Die Funktion zum Abrufen von Daten wird beim ersten Rendern der Komponente aufgerufen
  useEffect(() => {
    fetchCardItemsFromDatabase()
  }, [cardItems]) // Leeres Abhängigkeitsarray bedeutet, dass dieser Effekt nur einmal nach dem Rendern ausgeführt wird

  const addCardItem = async (name: string, cashflowAmount: number) => {
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

        // Fügen Sie das neue Element zum lokalen Zustand hinzu
        setCardItems([...cardItems, newCardItem])
      } else {
        console.error("Schlüssel wurde nicht von der Datenbank erhalten")
      }
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Elements: ", error)
    }
  }

  const removeCardItem = (itemId: any) => {
    try {
      const db = getDatabase()
      remove(ref(db, `${determineItemsRef(cardTitle)}/${itemId}`))
      console.log("Element erfolgreich entfernt")
      setCardItems(cardItems?.filter((item) => item.id !== itemId))
    } catch (error) {
      console.error("Fehler beim Entfernen des Elements: ", error)
    }
  }

  const editCardItem = async (
    itemId: string,
    updatedName: string,
    updatedCashflowAmount: number
  ) => {
    try {
      const db = getDatabase(firebaseApp)
      const itemRef = ref(db, `${determineItemsRef(cardTitle)}/${itemId}`)

      await update(itemRef, {
        name: updatedName,
        cashflowAmount: updatedCashflowAmount,
      })

      console.log("Element erfolgreich aktualisiert")

      // Lokalen Zustand aktualisieren
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
      console.error("Fehler beim Aktualisieren des Elements: ", error)
    }
  }

  return (
    <div className={styles.StyledBigCardWrapper}>
      <div className={styles.StyledBigCardHeadWrapper}>
        <h2 className={styles.StyledCardTitle}>{cardTitle}</h2>
        <Button
          className={styles.StyledAddButton}
          endIcon={<AddCircleOutline />}
          onClick={handleOpen}
        >
          {buttonActionName}
        </Button>
      </div>
      <div className={styles.StyledHeadlineAndListWrapper}>
        <div className={styles.StyledHeadlineWrapper}>
          {headlineItems?.map((headlineItem) => {
            return (
              <span key={headlineItem.headline + 1}>
                {headlineItem.headline}
              </span>
            )
          })}
        </div>

        {Object.values(cardItems).map((listItem: ListItemProps) => {
          return (
            <ListItem
              id={listItem.id}
              key={`${listItem.name}-${listItem.cashflowAmount}`}
              name={listItem.name}
              cashflowAmount={listItem.cashflowAmount}
              onRemove={removeCardItem} // Hier wird die Funktion übergeben
              onEdit={editCardItem}
              isFourColumns={isFourColumns}
            />
          )
        })}
      </div>
      <hr />
      <div className={styles.StyledTotalAmountWrapper}>
        <span>
          Total :{" "}
          <strong style={{ fontSize: "18px" }}>
            €{determineTotal(cardItems)}
          </strong>
        </span>
      </div>
      {openDialog && (
        <Dialog
          open={openDialog}
          onClose={handleClose}
          addCardItem={addCardItem}
        ></Dialog>
      )}
    </div>
  )
}
