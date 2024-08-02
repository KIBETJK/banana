// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC63WcaoCQIsIuPJhcVMbfQYVZEaG66YdY",
  authDomain: "banana-bcb29.firebaseapp.com",
  projectId: "banana-bcb29",
  storageBucket: "banana-bcb29.appspot.com",
  messagingSenderId: "711721493535",
  appId: "1:711721493535:web:46047a2df17aa54453612a",
  measurementId: "G-MTW6WLCKW0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const storage=getStorage(app)
// const analytics = getAnalytics(app);