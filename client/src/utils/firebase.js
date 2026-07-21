import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai---interview.firebaseapp.com",
  projectId: "ai---interview",
  storageBucket: "ai---interview.firebasestorage.app",
  messagingSenderId: "115528310676",
  appId: "1:115528310676:web:4f515d064402b283123981",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
