/* eslint-disable prettier/prettier */
import { AddCircleOutline } from "@mui/icons-material"
import { nanoid } from "nanoid"
import React, { useEffect, useState } from "react"

import { Dialog } from "../Dialog/Dialog"
import styles from "./BigCard.styles.module.css"
import type { BigCardProps } from "./BigCard.types"
import { ListItem } from "./ListItem"
import type { ListItemProps } from "./ListItem.types"
import { BigCardSkeleton } from "./SubComponents"
import { determineAddButtonStyling, determineTotal } from "./useBigCard"

export const BigCard: React.FC<BigCardProps> = ({
  cardTitle,
  buttonActionName,
  headlineItems,
  isFourColumns,
  handleAddCardItem,
  handleRemoveCardItem,
  handleEditItem,
  cardItems,
}) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [cardItemsLoading, setCardItemsLoading] = useState<boolean>(true)

  const sortedCardItems = Object.values(cardItems).sort(
    (a, b) =>
      (b as ListItemProps).cashflowAmount - (a as ListItemProps).cashflowAmount,
  ) as ListItemProps[]

  // this functions makes the sure the skeleton is not showed even if the items array is empty
  const checkForEmptyItems = () => {
    setTimeout(() => {
      if (cardItems && cardItems.length === 0) {
        setCardItemsLoading(false)
      }
    }, 5000)
  }

  useEffect(() => {
    if (cardItems.length > 0) {
      setCardItemsLoading(false)
    }
    checkForEmptyItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardItems])

  return (
    <div className={styles.StyledBigCardWrapper}>
      <div className={styles.StyledBigCardHeadWrapper}>
        <h2 className={styles.StyledCardTitle}>{cardTitle}</h2>
        <button
          className={determineAddButtonStyling(styles, buttonActionName)}
          onClick={() => setOpenDialog(!openDialog)}
          type="button"
        >
          {buttonActionName}
          <AddCircleOutline />
        </button>
      </div>
      <div className={styles.StyledHeadlineAndListWrapper}>
        <div className={styles.StyledHeadlineWrapper}>
          {headlineItems?.map((headlineItem) => {
            return (
              <span key={nanoid()} className={styles.StyledHeadlineItemLabel}>
                {headlineItem.headline}
              </span>
            )
          })}
        </div>

        {cardItemsLoading ? (
          Array.from({ length: 7 }).map(() => (
            <BigCardSkeleton key={nanoid()} />
          ))
        ) : (
          // Render card items when not loading
          <div className={styles.StyledListItemsArrayWrapper}>
            {sortedCardItems.map((listItem: ListItemProps) => (
              <ListItem
                id={listItem.id}
                key={`${listItem.name}-${listItem.cashflowAmount} ${nanoid()}`}
                name={listItem.name}
                cashflowAmount={listItem.cashflowAmount}
                onRemove={handleRemoveCardItem}
                onEdit={handleEditItem}
                isFourColumns={isFourColumns}
              />
            ))}
          </div>
        )}
      </div>
      <hr />
      <div className={styles.StyledTotalAmountWrapper}>
        <span className={styles.StyledTotalText}>
          Total : <strong>€ {determineTotal(cardItems)}</strong>
        </span>
      </div>
      {openDialog && (
        <Dialog
          open={openDialog}
          dialogTitle="Add item"
          onClose={() => setOpenDialog(!openDialog)}
          addCardItem={handleAddCardItem}
          buttonActionName={buttonActionName || ""}
        />
      )}
    </div>
  )
}
