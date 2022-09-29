
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTC-zl8Us61qOksl4QPDeLE2iUj0shI9U",
  authDomain: "comtienda-6122c.firebaseapp.com",
  projectId: "comtienda-6122c",
  storageBucket: "comtienda-6122c.appspot.com",
  messagingSenderId: "717515949513",
  appId: "1:717515949513:web:a25c3abc7237641ecb9418"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);