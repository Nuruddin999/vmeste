import * as firebase from "firebase/app";


// If you enabled Analytics in your project, add the Firebase SDK for Analytics


// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore"; import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBsMvIVNRrrwzmfAE_DlWITmnWvVGiWr9Y",
  authDomain: "curier-df119.firebaseapp.com",
  databaseURL: "https://curier-df119.firebaseio.com",
  projectId: "curier-df119",
  storageBucket: "curier-df119.appspot.com",
  messagingSenderId: "38590786415",
  appId: "1:38590786415:web:f6bab2db7731bdec7ed69a"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
