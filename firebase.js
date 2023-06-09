import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPLOXQVfqhjt_tAcsEuMEtn1jYoOxe3Yk",
    authDomain: "agriurban-12aea.firebaseapp.com",
    projectId: "agriurban-12aea",
    storageBucket: "agriurban-12aea.appspot.com",
    messagingSenderId: "496817466349",
    appId: "1:496817466349:web:c4026c710b6774302fd5e4"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export const auth = getAuth();
  export default db