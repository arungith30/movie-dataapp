// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ_pBL7kFl7p3_9U-ZbkA3LedgYn2ZJiI",
  authDomain: "movie-dae39.firebaseapp.com",
  projectId: "movie-dae39",
  storageBucket: "movie-dae39.firebasestorage.app",
  messagingSenderId: "408186312579",
  appId: "1:408186312579:web:5097e4813452bfbd6888b6",
  measurementId: "G-VQG2YCHKB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;
