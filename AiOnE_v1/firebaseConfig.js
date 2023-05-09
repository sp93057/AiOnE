// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6yP9ON0PJEVwDPInd4bCIVExjRDZ3bFc",
  authDomain: "aione-sp93057.firebaseapp.com",
  projectId: "aione-sp93057",
  storageBucket: "gs://aione-sp93057.appspot.com",
  messagingSenderId: "786970585463",
  appId: "1:786970585463:web:8ef7ce3f1cbe9175365972",
  measurementId: "G-9TTM0GGX4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default {app, storage,};