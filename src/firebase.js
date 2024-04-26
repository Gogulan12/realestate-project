// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeAEysfemOVaMDSqKTyAwpgwGqf0gvNyw",
  authDomain: "realtor-clone-react-b3da5.firebaseapp.com",
  projectId: "realtor-clone-react-b3da5",
  storageBucket: "realtor-clone-react-b3da5.appspot.com",
  messagingSenderId: "5173072407",
  appId: "1:5173072407:web:18a1c04a17171c931c8252",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
