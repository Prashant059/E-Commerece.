// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOwQ0jYAWKNmxCMxV44hTeR--DkVX-_yA",
  authDomain: "e-commerce-84e7d.firebaseapp.com",
  projectId: "e-commerce-84e7d",
  storageBucket: "e-commerce-84e7d.appspot.com",
  messagingSenderId: "389153690831",
  appId: "1:389153690831:web:80524ce43e0884928693ba",
  measurementId: "G-KP8F2XRFE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);