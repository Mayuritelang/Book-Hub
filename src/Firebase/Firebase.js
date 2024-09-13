import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUAyyjaZtVNVU4EY1mHfPqd5FA6_zAuPs",
  authDomain: "book-hub-48c14.firebaseapp.com",
  projectId: "book-hub-48c14",
  storageBucket: "book-hub-48c14.appspot.com",
  messagingSenderId: "268596160467",
  appId: "1:268596160467:web:4e9cba1effbc82a0923126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;