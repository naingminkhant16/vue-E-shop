import {
    initializeApp
} from "firebase/app";
import "firebase/firestore"
import {
    getFirestore
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB3QiNfc5L8JetrmD6c9qn_JaWY85QdwLg",
    authDomain: "vue-e-shop-d0df0.firebaseapp.com",
    projectId: "vue-e-shop-d0df0",
    storageBucket: "vue-e-shop-d0df0.appspot.com",
    messagingSenderId: "742504120761",
    appId: "1:742504120761:web:28fa9b1fe5e0ca9ebe7668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore();
export {db}