
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf4DaornBkatF5Hrlx1YwXqkEdgW5z0og",
  authDomain: "fir-3b3cc.firebaseapp.com",
  projectId: "fir-3b3cc",
  storageBucket: "fir-3b3cc.appspot.com",
  messagingSenderId: "286738287153",
  appId: "1:286738287153:web:6180b3affed9d3b89b6310"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);