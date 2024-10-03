import React, { useEffect, useState } from "react";
import { BigCard } from "../components/BigCard/BigCard";
import { ListItemProps } from "../components/BigCard/ListItem.types";
import { addCardItemToDataBase } from "../utils/addCartItemToDataBase";
import { editCardItemFromDatabase } from "../utils/editCardItemFromDataBase";
import { removeCardItemFromDataBase } from "../utils/removeCardItemFromDataBase";

interface BigCardContainerProps {
  listItems?: ListItemProps[];
  cardTitle?: string;
  buttonActionName?: string;
  headlineItems?: { headline: string }[];
  isFourColumns?: boolean;
}

export const BigCardContainer: React.FC<BigCardContainerProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
  isFourColumns,
}) => {
  const [cardItems, setCardItems] = useState<ListItemProps[]>([]);

  useEffect(() => {
    if (listItems) {
      setCardItems(listItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <BigCard
      listItems={listItems}
      cardTitle={cardTitle}
      buttonActionName={buttonActionName}
      headlineItems={headlineItems}
      isFourColumns={isFourColumns}
      handleAddCardItem={handleAddCardItem}
      handleRemoveCardItem={handleRemoveCardItem}
      handleEditItem={handleEditItem}
      cardItems={cardItems}
      setCardItems={setCardItems}
    />
  );
};
