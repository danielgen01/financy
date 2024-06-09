import React, { useCallback, useEffect, useState } from "react"
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
import {
  determineItemsRef,
  determineTotal,
  handleClose,
  handleOpen,
} from "./useBigCard"
import {
  addCardItemToDataBase,
  editCardItemFromDatabase,
  fetchCardItemsFromDatabase,
  removeCardItemFromDataBase,
} from "./useFireBase"

export const BigCard: React.FC<BigCardProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
  isFourColumns,
}) => {
  const [cardItems, setCardItems] = useState<ListItemProps[]>(listItems || [])
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  fetchCardItemsFromDatabase(cardTitle, setCardItems)

  const fetchItems = useCallback(() => {
    fetchCardItemsFromDatabase(cardTitle, setCardItems)
  }, [cardTitle])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const handleAddCardItem = (name: string, cashflowAmount: number) => {
    addCardItemToDataBase(
      name,
      cashflowAmount,
      cardTitle,
      setCardItems,
      cardItems
    )
  }

  const handleRemoveCardItem = (itemId: any) => {
    removeCardItemFromDataBase(itemId, cardTitle, setCardItems, cardItems)
  }

  const handleEditItem = (
    itemId: string,
    updatedName: string,
    updatedCashflowAmount: number
  ) => {
    editCardItemFromDatabase(
      itemId,
      updatedName,
      updatedCashflowAmount,
      cardTitle,
      setCardItems,
      cardItems
    )
  }

  return (
    <div className={styles.StyledBigCardWrapper}>
      <div className={styles.StyledBigCardHeadWrapper}>
        <h2 className={styles.StyledCardTitle}>{cardTitle}</h2>
        <Button
          className={styles.StyledAddButton}
          endIcon={<AddCircleOutline />}
          onClick={() => handleOpen(setOpenDialog)}
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
              onRemove={handleRemoveCardItem} // Hier wird die Funktion übergeben
              onEdit={handleEditItem}
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
          onClose={() => handleClose(setOpenDialog)}
          addCardItem={handleAddCardItem}
        ></Dialog>
      )}
    </div>
  )
}
