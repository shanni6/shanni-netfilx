import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
//import { seedDatabase } from "../seed";
const config = {
    apiKey: "AIzaSyATm7KAey0u6WN0VDo540jeYCPxltwMszw",
    authDomain: "netflix--shanni-c45a5.firebaseapp.com",
    projectId: "netflix--shanni-c45a5",
    storageBucket: "netflix--shanni-c45a5.appspot.com",
    messagingSenderId: "1010024819323",
    appId: "1:1010024819323:web:d1538277312f5a65a890de",
};

const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);
export { firebase };
