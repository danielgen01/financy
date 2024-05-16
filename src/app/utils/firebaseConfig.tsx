// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import firebase from "firebase/compat/app"
import { get, getDatabase, ref } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  databaseURL:
    "https://financy-1a6a2-default-rtdb.europe-west1.firebasedatabase.app",
  measurementId: "G-ERZF52474T",
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const getFirebaseData = async (dataType: any) => {
  try {
    const db = getDatabase()
    const snapshot = await get(ref(db, dataType))
    return snapshot.val()
  } catch (error) {
    console.error("Error fetching data from Firebase:", error)
    return []
  }
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// const auth = getAuth(app)
