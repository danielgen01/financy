"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { auth, db } from "../app/utils/firebaseConfig";
import DashboardPage from "./components/pageTemplates/homepage/DashboardPage";

const objectToArray = (obj: any) => {
  if (!obj || typeof obj !== "object") return [];
  return Object.entries(obj).map(([id, data]) => ({ id, ...(data as object) }));
};

export default function HomePageAKADashboardPage() {
  const [dashboardPageProps, setDashboardPageProps] = useState<any>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setupRealtimeListeners(user.uid);
      } else {
        setDashboardPageProps(null);
      }
    });

    return () => unsubscribeAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
