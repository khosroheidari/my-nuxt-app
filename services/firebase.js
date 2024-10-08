// services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDgtv7bEyCFjWij7yDSJDKNHMVzJAg9vrI",
  authDomain: "taskdoing-3cec7.firebaseapp.com",
  projectId: "taskdoing-3cec7",
  storageBucket: "taskdoing-3cec7.appspot.com",
  messagingSenderId: "242812125632",
  appId: "1:242812125632:web:9b287b2781c9897800c825"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication
  const auth = getAuth(app);

  // Optionally return the Firebase app instance to use it in other parts of the app
  export { auth };
