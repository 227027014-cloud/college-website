import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_tWcELkwrDmGFXJd1nFpYTNhaC8yXOI0",
  authDomain: "sentinelx-88a0c.firebaseapp.com",
  projectId: "sentinelx-88a0c",
  storageBucket: "sentinelx-88a0c.firebasestorage.app",
  messagingSenderId: "411508402000",
  appId: "1:411508402000:web:d88c6fc66c8a95d4b5ee55",
  measurementId: "G-F2GFMSQXFX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log("Firestore ready!");
console.log("Firebase connected successfully!");
