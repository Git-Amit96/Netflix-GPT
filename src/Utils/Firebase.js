// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN8tMbFoTOujt27DDTDodCB-o0ahzZ6Lg",
  authDomain: "netflixgpt-bd4b9.firebaseapp.com",
  projectId: "netflixgpt-bd4b9",
  storageBucket: "netflixgpt-bd4b9.appspot.com",
  messagingSenderId: "27343168960",
  appId: "1:27343168960:web:ffa3a9af4c6eedaa521425",
  measurementId: "G-3QRSN4CYPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();