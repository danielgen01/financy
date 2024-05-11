// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIlZqKlGEmYrpDtgiPE6-GSuNvz-N6eI4",
  authDomain: "financy-1a6a2.firebaseapp.com",
  databaseURL:
    "https://financy-1a6a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "financy-1a6a2",
  storageBucket: "financy-1a6a2.appspot.com",
  messagingSenderId: "822741486669",
  appId: "1:822741486669:web:1daccde3323fe2625d2004",
  measurementId: "G-ERZF52474T",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
