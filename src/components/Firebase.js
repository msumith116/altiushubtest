import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBUcVW9KbuA3WhE_jXDzBKmm26pDrHMjNE",
  authDomain: "newapp-55187.firebaseapp.com",
  projectId: "newapp-55187",
  storageBucket: "newapp-55187.appspot.com",
  messagingSenderId: "743800221501",
  appId: "1:743800221501:web:b08608ffdcfff7ccf89f54",
  measurementId: "G-28EEWK079M"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};