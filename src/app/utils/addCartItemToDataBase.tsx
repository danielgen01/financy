import { firebaseApp, auth } from "@/app/utils/firebaseConfig";
import { determineItemsRef } from "./globals";
import { ListItemProps } from "../components/BigCard/ListItem.types";
import { getDatabase, push, ref } from "firebase/database";

export const addCardItemToDataBase = async (
  name: string,
  cashflowAmount: number,
  cardTitle: string | undefined,
  setCardItems: React.Dispatch<React.SetStateAction<ListItemProps[]>>,
  cardItems: ListItemProps[],
) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("User is not authenticated");
    return;
  }

  try {
    const db = getDatabase(firebaseApp);
    const newItemRef = push(
      ref(db, `users/${user.uid}/${determineItemsRef(cardTitle)}`),
      {
        name: name,
        cashflowAmount: cashflowAmount,
      },
    );

    const newItemKey = newItemRef.key;

    if (newItemKey) {
      const newCardItem: ListItemProps = {
        name: name,
        cashflowAmount: cashflowAmount,
        id: newItemKey,
      };

      setCardItems([...cardItems, newCardItem]);
    } else {
      console.error("Key was not returned from the database");
    }
  } catch (error) {
    console.error("Error adding item:", error);
  }
};
