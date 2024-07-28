import { firebaseApp, auth } from "@/app/utils/firebaseConfig";
import { determineItemsRef } from "./globals";
import { ListItemProps } from "../components/BigCard/ListItem.types";
import { getDatabase, ref, remove } from "firebase/database";

export const removeCardItemFromDataBase = (
  itemId: any,
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
    remove(
      ref(db, `users/${user.uid}/${determineItemsRef(cardTitle)}/${itemId}`),
    );
    console.log("Item successfully removed");
    setCardItems(cardItems?.filter((item) => item.id !== itemId));
  } catch (error) {
    console.error("Error removing item:", error);
  }
};
