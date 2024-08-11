"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database"; // Für Realtime Database
import { auth, getFirebaseData, db } from "../app/utils/firebaseConfig"; // Stelle sicher, dass db dein Database-Objekt ist
import DashboardPage from "./components/pageTemplates/homepage/DashboardPage";

const objectToArray = (obj: any) => {
  if (!obj || typeof obj !== "object") return [];
  return Object.entries(obj).map(([id, data]) => ({ id, ...(data as object) }));
};

export default function HomePageAKADashboardPage() {
  const [userId, setUserId] = useState<string>("");
  const [dashboardPageProps, setDashboardPageProps] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setupRealtimeListeners(user.uid);
      } else {
        setUserId("");
        setDashboardPageProps(null);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const setupRealtimeListeners = (uid: string) => {
    const incomeRef = ref(db, `users/${uid}/incomeItems/`);
    const expenseRef = ref(db, `users/${uid}/expensesItems/`);
    const assetRef = ref(db, `users/${uid}/assetsItems/`);
    const liabilitiesRef = ref(db, `users/${uid}/liabilitiesItems/`);

    onValue(incomeRef, (snapshot) => {
      const incomeData = snapshot.val();
      updateDashboardProps("incomeData", incomeData);
    });

    onValue(expenseRef, (snapshot) => {
      const expenseData = snapshot.val();
      updateDashboardProps("expenseData", expenseData);
    });

    onValue(assetRef, (snapshot) => {
      const assetData = snapshot.val();
      updateDashboardProps("assetData", assetData);
    });

    onValue(liabilitiesRef, (snapshot) => {
      const liabilitiesData = snapshot.val();
      updateDashboardProps("liabilitiesData", liabilitiesData);
    });
  };

  const updateDashboardProps = (key: string, data: any) => {
    setDashboardPageProps((prevProps: any) => ({
      ...prevProps,
      [key]: objectToArray(data),
    }));
  };

  return <DashboardPage {...dashboardPageProps} />;
}
