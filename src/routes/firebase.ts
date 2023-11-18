import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "nwitter-reloaded-67c5b.firebaseapp.com",
  projectId: "nwitter-reloaded-67c5b",
  storageBucket: "nwitter-reloaded-67c5b.appspot.com",
  messagingSenderId: "707180376239",
  appId: "1:707180376239:web:d861059fe994eb0ba2a45a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);