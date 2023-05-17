// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPr4Yv6fEHBLkkbCkc77rTjPrvq_RJD4I",
  authDomain: "choclate-management-system.firebaseapp.com",
  projectId: "choclate-management-system",
  storageBucket: "choclate-management-system.appspot.com",
  messagingSenderId: "964288233984",
  appId: "1:964288233984:web:88e19cb26f9b40cbbfcee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;