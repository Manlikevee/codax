// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCdsLcKzg5KZjIdT76wcfPDNWGDBgrTV_c",
    authDomain: "codax-be511.firebaseapp.com",
    projectId: "codax-be511",
    storageBucket: "codax-be511.appspot.com",
    messagingSenderId: "405083589523",
    appId: "1:405083589523:web:a68d66a5d1f6b868d47666"
  };

  const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
