import React, { useEffect, useState } from "react"
import {
  getDatabase,
  ref,
  push,
  set,
  remove,
  off,
  onValue,
} from "firebase/database"
import { AddCircleOutline } from "@mui/icons-material"
import { ListItem } from "./ListItem"
import { BigCardProps } from "./BigCard.types"
import { ListItemProps } from "./ListItem.types"
import db from "../../utils/firesstore"
import { collection, addDoc } from "firebase/firestore"
import {
  StyledAddButton,
  StyledBigCardHeadWrapper,
  StyledBigCardWrapper,
  StyledCardTitle,
  StyledHeadlineAndListWrapper,
  StyledHeadlineWrapper,
  StyledTotalAmountWrapper,
} from "./BigCard.styles"
import { firebaseApp } from "@/app/utils/firebaseConfig"
import { Dialog } from "../Dialog/Dialog"
import { DialogFormData } from "../Dialog/Dialog.types"

export const BigCard: React.FC<BigCardProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
}) => {
  const [cardItems, setCardItems] = useState<ListItemProps[]>(listItems)
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const handleClose = () => {
    setOpenDialog(false)
    console.log(openDialog)
  }

  const handleOpen = () => {
    setOpenDialog(true)
    console.log(openDialog)
  }

  // Gesamtbetrag berechnen
  const determineTotal = () => {
    let total = 0
    cardItems?.forEach((listItem: ListItemProps) => {
      total += listItem.cashflowAmount
    })
    return total
  }

  const determineItemsRef = () => {
    if (cardTitle === "Income") {
      return "incomeItems"
    } else if (cardTitle === "Expenses") {
      return "expensesItems"
    } else if (cardTitle === "Assets") {
      return "assetsItems"
    } else {
      return "liabilitiesItems"
    }
  }

  const fetchCardItemsFromDatabase = () => {
    const db = getDatabase()
    const itemsRef = ref(db, determineItemsRef())

    // Fügen Sie einen Listener hinzu, um Änderungen an den Daten zu beobachten
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        // Wenn Daten vorhanden sind, setzen Sie den Zustand auf die abgerufenen Daten
        const cardItemsWithIds = Object.entries<any>(data).map(
          ([id, item]) => ({
            id: id,
            ...item,
          })
        )
        setCardItems(cardItemsWithIds)
      }
      console.log("Daten erfolgreich abgerufen", data)
    })
  }

  // Die Funktion zum Abrufen von Daten wird beim ersten Rendern der Komponente aufgerufen
  useEffect(() => {
    fetchCardItemsFromDatabase()
  }, []) // Leeres Abhängigkeitsarray bedeutet, dass dieser Effekt nur einmal nach dem Rendern ausgeführt wird

  const addCardItem = async (name: string, cashflowAmount: number) => {
    try {
      const db = getDatabase(firebaseApp)
      const newItemRef = push(ref(db, determineItemsRef()), {
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
      remove(ref(db, `${determineItemsRef()}/${itemId}`))
      console.log("Element erfolgreich entfernt")
      setCardItems(cardItems?.filter((item) => item.id !== itemId))
    } catch (error) {
      console.error("Fehler beim Entfernen des Elements: ", error)
    }
  }
  const renderDialog = () => {
    return (
      <Dialog
        open={openDialog}
        onClose={handleClose}
        addCardItem={addCardItem}
      ></Dialog>
    )
  }

  return (
    <StyledBigCardWrapper>
      <StyledBigCardHeadWrapper>
        <StyledCardTitle>{cardTitle}</StyledCardTitle>
        <StyledAddButton endIcon={<AddCircleOutline />} onClick={handleOpen}>
          {buttonActionName}
        </StyledAddButton>
      </StyledBigCardHeadWrapper>
      <StyledHeadlineAndListWrapper>
        <StyledHeadlineWrapper>
          {headlineItems?.map((headlineItem) => {
            return (
              <span key={headlineItem.headline + 1}>
                {headlineItem.headline}
              </span>
            )
          })}
        </StyledHeadlineWrapper>

        {cardItems &&
          cardItems?.map((listItem: ListItemProps) => {
            console.log(listItem, "mapping")
            return (
              <ListItem
                id={listItem.id}
                key={`${listItem.name}-${listItem.cashflowAmount}`}
                name={listItem.name}
                cashflowAmount={listItem.cashflowAmount}
                onRemove={removeCardItem} // Hier wird die Funktion übergeben
              />
            )
          })}
      </StyledHeadlineAndListWrapper>
      <hr />
      <StyledTotalAmountWrapper>
        <span>
          Total :{" "}
          <strong style={{ fontSize: "18px" }}>${determineTotal()}</strong>
        </span>
      </StyledTotalAmountWrapper>
      {openDialog && renderDialog()}
    </StyledBigCardWrapper>
  )
}
