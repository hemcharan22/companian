import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

export const config = {
  apiKey: AIzaSyBawGg0SI3tQfzDDn9qJS_vc6eCLrOkHys,
  authDomain: adept-amp-324009.firebaseapp.com,
  projectId: adept-amp-324009,
  storageBucket: adept-amp-324009.appspot.com,
  messagingSenderId: 594218645311,
  appId: 1:594218645311:web:9f8eb6494a1a5431bb858a,
  measurementId: G-6Q8L17CTNX,
};


const app = initializeApp(config);

export const db = getFirestore(app);
