import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCESDFljPPOtWNoSfyVBEPRgYuI7ywvJno",
    authDomain: "dropper-993e4.firebaseapp.com",
    projectId: "dropper-993e4",
    storageBucket: "dropper-993e4.appspot.com",
    messagingSenderId: "242542646556",
    appId: "1:242542646556:web:6405de94cee2ac8703d6d9"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { db, storage };