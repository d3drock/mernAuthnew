import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2324e.firebaseapp.com",
  projectId: "mern-auth-2324e",
  storageBucket: "mern-auth-2324e.appspot.com",
  messagingSenderId: "239817895844",
  appId: "1:239817895844:web:07d2661d8e4a2c6f2fdb31",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
