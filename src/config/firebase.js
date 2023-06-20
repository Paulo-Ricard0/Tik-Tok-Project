import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBy2xasXyKnNaijMB8U3kfV-7YvTssupfQ",
  authDomain: "tiktok-clone-8cf26.firebaseapp.com",
  projectId: "tiktok-clone-8cf26",
  storageBucket: "tiktok-clone-8cf26.appspot.com",
  messagingSenderId: "286020977453",
  appId: "1:286020977453:web:639b33debdbcee48f549a4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
