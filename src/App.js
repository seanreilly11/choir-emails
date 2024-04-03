import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlRxLAu5k_Nl2nq6M9C7Xxmr9ZjH81HnA",
    authDomain: "choir-emails.firebaseapp.com",
    projectId: "choir-emails",
    storageBucket: "choir-emails.appspot.com",
    messagingSenderId: "3841914771",
    appId: "1:3841914771:web:e95adefa1f94c13f5c5a66",
    measurementId: "G-7Y6NDRRE0X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return <div className="App">EMails</div>;
}

export default App;
