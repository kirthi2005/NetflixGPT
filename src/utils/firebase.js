// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNH8J3igFQxU19M1TOPV4bimNvq3bmR08",
  authDomain: "my-netflixgpt-bd4ff.firebaseapp.com",
  projectId: "my-netflixgpt-bd4ff",
  storageBucket: "my-netflixgpt-bd4ff.appspot.com",
  messagingSenderId: "1089767176848",
  appId: "1:1089767176848:web:22d09c3393508a22593615",
  measurementId: "G-5JCWR0BBWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();