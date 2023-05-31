import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCNfbi1QRinwxMOn97f3Dj4yOJxevK9bUI",
  authDomain: "w3w-crud.firebaseapp.com",
  databaseURL:
    "https://w3w-crud-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "w3w-crud",
  storageBucket: "w3w-crud.appspot.com",
  messagingSenderId: "158626307878",
  appId: "1:158626307878:web:f3a8a51a0094cf15362be7",
  measurementId: "G-B15Q8W62TB",
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
