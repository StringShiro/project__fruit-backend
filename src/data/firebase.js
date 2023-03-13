import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCFf2Hiyk1IsF3Mj21yaOhZx7BKBj5uA0U",
  authDomain: "fruit-eab1e.firebaseapp.com",
  projectId: "fruit-eab1e",
  storageBucket: "fruit-eab1e.appspot.com",
  messagingSenderId: "289153872949",
  appId: "1:289153872949:web:d05a22fbdc1998152aad7c",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
//
