// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq_Bii7QHz4mkIqUBtU8hb1O6-0xa5efo",
    authDomain: "znet-6536d.firebaseapp.com",
    projectId: "znet-6536d",
    storageBucket: "znet-6536d.appspot.com",
    messagingSenderId: "291637604120",
    appId: "1:291637604120:web:793c561f6c5fb79bca786d",
    measurementId: "G-NRS1SYQK89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imageDb = getStorage(app);