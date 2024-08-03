import React, { useCallback, useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  push,
  remove,
  onValue,
  update,
} from "firebase/database";
import { AddCircleOutline } from "@mui/icons-material";
import { ListItem } from "./ListItem";
import { BigCardProps } from "./BigCard.types";
import { ListItemProps } from "./ListItem.types";
import { Dialog } from "../Dialog/Dialog";
import styles from "./BigCard.styles.module.css";
import { Button } from "@mui/material";
import { determineTotal, handleClose, handleOpen } from "./useBigCard";
import { addCardItemToDataBase } from "../../utils/addCartItemToDataBase";
import { editCardItemFromDatabase } from "../../utils/editCardItemFromDataBase";
import { fetchCardItemsFromDatabase } from "../../utils/fetchCardItemsFromDataBase";
import { removeCardItemFromDataBase } from "../../utils/removeCardItemFromDataBase";
import { auth } from "@/app/utils/firebaseConfig"; // Ensure this import is correct
import { User } from "firebase/auth";

export const BigCard: React.FC<BigCardProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
  isFourColumns,
}) => {
  const [cardItems, setCardItems] = useState<ListItemProps[]>(listItems || []);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchItems = useCallback(() => {
    if (user) {
      fetchCardItemsFromDatabase(user.uid, cardTitle, setCardItems);
    }
  }, [user, cardTitle]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

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
