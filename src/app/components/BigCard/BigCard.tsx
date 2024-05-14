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

export const BigCard: React.FC<BigCardProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
}) => {
  const [cardItems, setCardItems] = useState<ListItemProps[]>([])

  // Gesamtbetrag berechnen
  const determineTotal = () => {
    let total = 0
    cardItems?.forEach((listItem: ListItemProps) => {
      total += listItem.cashflowAmount
    })
    return total
  }

  // Funktion zum Abrufen und Aktualisieren der Daten
  const fetchCardItemsFromDatabase = () => {
    const db = getDatabase()
    const itemsRef = ref(db, "listItems")

    // Fügen Sie einen Listener hinzu, um Änderungen an den Daten zu beobachten
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        // Wenn Daten vorhanden sind, setzen Sie den Zustand auf die abgerufenen Daten
        setCardItems(Object.values(data))
      }
    })
  }

  // Die Funktion zum Abrufen von Daten wird beim ersten Rendern der Komponente aufgerufen
  useEffect(() => {
    fetchCardItemsFromDatabase()
  }, []) // Leeres Abhängigkeitsarray bedeutet, dass dieser Effekt nur einmal nach dem Rendern ausgeführt wird

  // Funktion zum Hinzufügen eines Kartenelements
  const addCardItem = async () => {
    try {
      const db = getDatabase(firebaseApp)
      const newItemRef = push(ref(db, "listItems"), {
        name: "New Card Item",
        cashflowAmount: 0,
      })

      const newItemKey = newItemRef.key

      const newCardItem: ListItemProps = {
        name: "New Card Item",
        cashflowAmount: 0,
        id: newItemKey,
      }

      // Fügen Sie das neue Element zum lokalen Zustand hinzu
      setCardItems([...cardItems, newCardItem])
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Elements: ", error)
    }
  }

  const removeCardItem = async (itemId: any) => {
    try {
      const db = getDatabase()
      await remove(ref(db, `listItems/${itemId}`))
      console.log("Element erfolgreich entfernt")
      setCardItems(cardItems?.filter((item) => item.id !== itemId))
    } catch (error) {
      console.error("Fehler beim Entfernen des Elements: ", error)
    }
  }

  // const newCardItem: ListItemProps = {
  //   name: "New Card Item",
  //   cashflowAmount: 0,
  // }
  // // Ein neues Element zur Datenbank hinzufügen
  // const newItemRef = push(ref(database, "listItems"), newCardItem)
  // const newItemKey = newItemRef.key
  // // Setze das neue Element in den lokalen Zustand, nachdem es erfolgreich zur Datenbank hinzugefügt wurde
  // newItemRef
  //   .then(() => {
  //     setCardItems([...cardItems, { ...newCardItem, id: newItemKey }])
  //   })
  //   .catch((error) => {
  //     console.error("Fehler beim Hinzufügen des Elements: ", error)
  //   })

  return (
    <StyledBigCardWrapper>
      <StyledBigCardHeadWrapper>
        <StyledCardTitle>{cardTitle}</StyledCardTitle>
        <StyledAddButton endIcon={<AddCircleOutline />} onClick={addCardItem}>
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

        {cardItems?.map((listItem: ListItemProps) => {
          return (
            <ListItem
              id={listItem.id}
              name={listItem.name}
              key={listItem.id}
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
    </StyledBigCardWrapper>
  )
}
