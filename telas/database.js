import firebase from 'firebase'

require ('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyCOLIlJMHwbZbF2rhjKhCYCUEyZd8_s54E",
  authDomain: "bombastic-side-eye.firebaseapp.com",
  projectId: "bombastic-side-eye",
  storageBucket: "bombastic-side-eye.appspot.com",
  messagingSenderId: "831494406422",
  appId: "1:831494406422:web:877c71a94d59d061141037"
};
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore ()