import React, { useEffect, useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { ListItem } from "./ListItem";
import { BigCardProps } from "./BigCard.types";
import { ListItemProps } from "./ListItem.types";
import { Dialog } from "../Dialog/Dialog";
import styles from "./BigCard.styles.module.css";
import { Box, Button, Skeleton } from "@mui/material";
import { determineTotal } from "./useBigCard";
import { addCardItemToDataBase } from "../../utils/addCartItemToDataBase";
import { editCardItemFromDatabase } from "@/app/utils/editCardItemFromDataBase";
import { removeCardItemFromDataBase } from "@/app/utils/removeCardItemFromDataBase";
import { nanoid } from "nanoid";
import { BigCardSkeleton } from "./SubComponents";

export const BigCard: React.FC<BigCardProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
  isFourColumns,
}) => {
  const [cardItems, setCardItems] = useState<ListItemProps[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    if (listItems) {
      setCardItems(listItems);
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

  const determineAddButtonStyling = () => {
    console.log(buttonActionName);
    if (buttonActionName === "Add Income" || buttonActionName === "Add Asset") {
      return styles.StyledAddButton;
    } else {
      return styles.StyledAddButonRed;
    }
  };

  return (
    <div className={styles.StyledBigCardWrapper}>
      <div className={styles.StyledBigCardHeadWrapper}>
        <h2 className={styles.StyledCardTitle}>{cardTitle}</h2>
        <button
          className={determineAddButtonStyling()}
          onClick={() => setOpenDialog(!openDialog)}
        >
          {buttonActionName}
          {<AddCircleOutline />}
        </button>
      </div>
      <div className={styles.StyledHeadlineAndListWrapper}>
        <div className={styles.StyledHeadlineWrapper}>
          {headlineItems?.map((headlineItem) => {
            return <span key={nanoid()}>{headlineItem.headline}</span>;
          })}
        </div>

        {!listItems ? (
          Array.from({ length: 7 }).map((index: any) => (
            <BigCardSkeleton key={nanoid()} />
          ))
        ) : (
          // Render card items when not loading
          <div className={styles.StyledListItemsArrayWrapper}>
            {Object.values(cardItems).map((listItem: ListItemProps) => {
              return (
                <ListItem
                  id={listItem.id}
                  key={`${listItem.name}-${listItem.cashflowAmount} ${nanoid()}`}
                  name={listItem.name}
                  cashflowAmount={listItem.cashflowAmount}
                  onRemove={handleRemoveCardItem}
                  onEdit={handleEditItem}
                  isFourColumns={isFourColumns}
                />
              );
            })}
          </div>
        )}
      </div>
      <hr />
      <div className={styles.StyledTotalAmountWrapper}>
        <span>
          Total :{" "}
          <strong style={{ fontSize: "18px" }}>
            € {determineTotal(cardItems)}
          </strong>
        </span>
      </div>
      {openDialog && (
        <Dialog
          open={openDialog}
          dialogTitle="Add item"
          onClose={() => setOpenDialog(!openDialog)}
          addCardItem={handleAddCardItem}
        />
      )}
    </div>
  );
};
