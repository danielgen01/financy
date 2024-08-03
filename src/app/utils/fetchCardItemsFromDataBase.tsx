import { firebaseApp, auth } from "@/app/utils/firebaseConfig";
import { determineItemsRef } from "./globals";
import { ListItemProps } from "../components/BigCard/ListItem.types";
import { getDatabase, ref, get } from "firebase/database";

export const fetchCardItemsFromDatabase = async (
  userId: string,
  cardTitle: string | undefined,
  setCardItems: React.Dispatch<React.SetStateAction<ListItemProps[]>>,
) => {
  try {
    const db = getDatabase(firebaseApp);
    const itemsRef = ref(db, `users/${userId}/${determineItemsRef(cardTitle)}`);
    const snapshot = await get(itemsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const cardItemsWithIds = Object.entries<any>(data).map(([id, item]) => ({
        id: id,
        ...item,
      }));
      setCardItems(cardItemsWithIds);
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
  }
};
