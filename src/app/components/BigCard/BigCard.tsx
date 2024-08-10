import React, { useCallback, useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  push,
  remove,
  onValue,
  update,
  set,
} from "firebase/database";
import { AddCircleOutline } from "@mui/icons-material";
import { ListItem } from "./ListItem";
import { BigCardProps } from "./BigCard.types";
import { ListItemProps } from "./ListItem.types";
import { Dialog } from "../Dialog/Dialog";
import styles from "./BigCard.styles.module.css";
import { Button, Skeleton } from "@mui/material";
import { determineTotal, handleClose, handleOpen } from "./useBigCard";
import { addCardItemToDataBase } from "../../utils/addCartItemToDataBase";
import { editCardItemFromDatabase } from "@/app/utils/editCardItemFromDataBase";
import { removeCardItemFromDataBase } from "@/app/utils/removeCardItemFromDataBase";

export const BigCard: React.FC<BigCardProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
  isFourColumns,
}) => {
  const [cardItems, setCardItems] = useState<ListItemProps[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (listItems) {
      setCardItems(listItems);
      setLoading(false);
    }
  }, [cardItems, listItems]);

  const handleAddCardItem = (name: string, cashflowAmount: number) => {
    addCardItemToDataBase(
      name,
      cashflowAmount,
      cardTitle,
      setCardItems,
      cardItems,
    );
  };

  const handleRemoveCardItem = (itemId: any) => {
    removeCardItemFromDataBase(itemId, cardTitle, setCardItems, cardItems);
  };

  const handleEditItem = (
    itemId: string,
    updatedName: string,
    updatedCashflowAmount: number,
  ) => {
    editCardItemFromDatabase(
      itemId,
      updatedName,
      updatedCashflowAmount,
      cardTitle,
      setCardItems,
      cardItems,
    );
  };

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
            );
          })}
        </div>

        {loading
          ? Array.from({ length: 7 }).map((_, index) => (
              <Skeleton key={index} width="100%" height={75} />
            ))
          : // Render card items when not loading
            Object.values(cardItems).map((listItem: ListItemProps) => {
              return (
                <ListItem
                  id={listItem.id}
                  key={`${listItem.name}-${listItem.cashflowAmount}`}
                  name={listItem.name}
                  cashflowAmount={listItem.cashflowAmount}
                  onRemove={handleRemoveCardItem}
                  onEdit={handleEditItem}
                  isFourColumns={isFourColumns}
                />
              );
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
          dialogTitle="Add item"
          onClose={() => handleClose(setOpenDialog)}
          addCardItem={handleAddCardItem}
        ></Dialog>
      )}
    </div>
  );
};
