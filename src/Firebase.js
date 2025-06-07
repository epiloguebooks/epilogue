// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

apiKey: "AIzaSyC_VVgyr51C9_BOZdzDegErssQ14pX8W9g",
  authDomain: "epilogue-8f9f3.firebaseapp.com",
  projectId: "epilogue-8f9f3",
  storageBucket: "epilogue-8f9f3.firebasestorage.app",
  messagingSenderId: "520826081542",
  appId: "1:520826081542:web:4cd33dd3ee1782aacbce87",
  measurementId: "G-VV42E3B635"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
