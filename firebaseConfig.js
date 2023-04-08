import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5721ahfLs6R3joRQSo3auNMxmb-ts_I0",
  authDomain: "unicorn-macho.firebaseapp.com",
  projectId: "unicorn-macho",
  storageBucket: "unicorn-macho.appspot.com",
  messagingSenderId: "833566195001",
  appId: "1:833566195001:web:1edd6fc56bd907fdd17ce8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
