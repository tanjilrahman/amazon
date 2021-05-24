import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBCyQAnuH4II8VyJPbGkXAkSNwx4ivz7Ys',
  authDomain: 'amzn-700e2.firebaseapp.com',
  projectId: 'amzn-700e2',
  storageBucket: 'amzn-700e2.appspot.com',
  messagingSenderId: '232958371075',
  appId: '1:232958371075:web:45f3c65d858a36952fb536',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
