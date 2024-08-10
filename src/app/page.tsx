"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getFirebaseData } from "../app/utils/firebaseConfig";
import DashboardPage from "./components/pageTemplates/homepage/DashboardPage";
import { fetchDashboardPageProps } from "@/fetcher/Dashboard/fetchDashboardPage";

// Hilfsfunktion zum Umwandeln von Objekten in Arrays
const objectToArray = (obj: any) => {
  if (!obj) return [];
  return Object.entries(obj).map(([id, data]) => ({ id, ...data }));
};

export default function HomePageAKADashboardPage() {
  const [userId, setUserId] = useState<string>("");
  const [dashboardPageProps, setDashboardPageProps] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchData(user.uid);
      } else {
        setUserId("");
        setDashboardPageProps(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchData = async (uid: string) => {
    setLoading(true);
    try {
      const props = await fetchDashboardPageProps({
        getIncomeData: () => getFirebaseData(uid, "incomeItems"),
        getExpenseData: () => getFirebaseData(uid, "expensesItems"),
        getAssetData: () => getFirebaseData(uid, "assetsItems"),
        getLiabilitiesData: () => getFirebaseData(uid, "liabilitiesItems"),
      });

      // Umwandlung der Objekte in Arrays
      const formattedProps = {
        incomeData: objectToArray(props.incomeData),
        expenseData: objectToArray(props.expenseData),
        assetData: objectToArray(props.assetData),
        liabilitiesData: objectToArray(props.liabilitiesData),
      };

      setDashboardPageProps(formattedProps);
    } catch (error) {
      console.error("Error fetching dashboard props:", error);
    } finally {
      setLoading(false);
    }
  };

  return <DashboardPage {...dashboardPageProps} />;
}
