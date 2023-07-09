import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import{getDatabase, ref, set} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyANsGIzd_D73CMYL1s8qBbtus3mVTw4TbU",
    authDomain: "movie-3b13c.firebaseapp.com",
    projectId: "movie-3b13c",
    storageBucket: "movie-3b13c.appspot.com",
    messagingSenderId: "513288462251",
    appId: "1:513288462251:web:3c4437dfce701dc2a9fcee",
    measurementId: "G-H8HG06QVZ6"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
function signUp (userId, userName, email, password){
    const db = getDatabase();
    const reference = ref(db, `users/${userId}`);

  set(reference,{
    username: userName,
    Email: email,
    ID: userId,
    code: password
  });

}
signUp("Victor","Victor","victor@analytics","1234");
