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

export const BigCard: React.FC<BigCardProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
}) => {
  const [cardItems, setCardItems] = useState<ListItemProps[]>(listItems || [])
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const handleClose = () => {
    setOpenDialog(false)
  }

  const handleOpen = () => {
    setOpenDialog(true)
  }

  const determineTotal = () => {
    let total = 0
    for (const key in cardItems) {
      if (Object.prototype.hasOwnProperty.call(cardItems, key)) {
        total += cardItems[key].cashflowAmount
      }
    }
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

  const editCardItem = async (
    itemId: string,
    updatedName: string,
    updatedCashflowAmount: number
  ) => {
    try {
      const db = getDatabase(firebaseApp)
      const itemRef = ref(db, `${determineItemsRef()}/${itemId}`)

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

        {Object.values(cardItems).map((listItem: ListItemProps) => {
          return (
            <ListItem
              id={listItem.id}
              key={`${listItem.name}-${listItem.cashflowAmount}`}
              name={listItem.name}
              cashflowAmount={listItem.cashflowAmount}
              onRemove={removeCardItem} // Hier wird die Funktion übergeben
              onEdit={editCardItem}
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
