import React, { useEffect, useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { ListItem } from "./ListItem";
import { BigCardProps } from "./BigCard.types";
import { ListItemProps } from "./ListItem.types";
import { Dialog } from "../Dialog/Dialog";
import styles from "./BigCard.styles.module.css";
import { Box, Button, Skeleton } from "@mui/material";
import { determineTotal, handleClose, handleOpen } from "./useBigCard";
import { addCardItemToDataBase } from "../../utils/addCartItemToDataBase";
import { editCardItemFromDatabase } from "@/app/utils/editCardItemFromDataBase";
import { removeCardItemFromDataBase } from "@/app/utils/removeCardItemFromDataBase";
import { nanoid } from "nanoid";

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
            return <span key={nanoid()}>{headlineItem.headline}</span>;
          })}
        </div>

        {!listItems
          ? Array.from({ length: 7 }).map(() => (
              <Box
                display={"flex"}
                justifyContent="space-between"
                key={nanoid()}
              >
                <Skeleton key={nanoid()} width="40%" height={75} />
                <Skeleton key={nanoid()} width="40%" height={75} />
                <Skeleton
                  sx={{ marginTop: "10px" }}
                  key={nanoid()}
                  width={50}
                  height={50}
                  variant="circular"
                />
                <Skeleton
                  sx={{ marginTop: "10px" }}
                  key={nanoid()}
                  width={50}
                  height={50}
                  variant="circular"
                />
              </Box>
            ))
          : // Render card items when not loading
            Object.values(cardItems).map((listItem: ListItemProps) => {
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
          onClose={() => handleClose(setOpenDialog)}
          addCardItem={handleAddCardItem}
        ></Dialog>
      )}
    </div>
  );
};
