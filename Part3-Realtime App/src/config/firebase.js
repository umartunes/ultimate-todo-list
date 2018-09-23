import firebase from 'firebase/app'

require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBMUlQk9S_7Prau2SSiYjW9xM1NrEXm-Ek",
    authDomain: "ultimate-todo-app-a9ed4.firebaseapp.com",
    databaseURL: "https://ultimate-todo-app-a9ed4.firebaseio.com",
    projectId: "ultimate-todo-app-a9ed4",
    storageBucket: "ultimate-todo-app-a9ed4.appspot.com",
    messagingSenderId: "25280805962"
};
firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging.onMessage(function (payload) {
//     console.log('Message received. ', payload);
//     window.notify(payload.notification.title ,'success') 
// });
const db = firebase.firestore();

db.settings({timestampsInSnapshots: true})

export default db



 
  