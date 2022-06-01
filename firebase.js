// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjzvL_Qh6iY6TOGJcd0isXRKdBOGuwIfo",
  authDomain: "dv302project.firebaseapp.com",
  projectId: "dv302project",
  storageBucket: "dv302project.appspot.com",
  messagingSenderId: "235291353029",
  appId: "1:235291353029:web:b05bdc1707186d888335ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
