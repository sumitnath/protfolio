// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYw4BHI5RxFgdzX70viymC1cnVCkkKLIA",
  authDomain: "sumit-protfolio.firebaseapp.com",
  projectId: "sumit-protfolio",
  storageBucket: "sumit-protfolio.appspot.com",
  messagingSenderId: "992223708522",
  appId: "1:992223708522:web:4348e9c4b0f619d3d6d113"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();