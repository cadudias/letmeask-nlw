import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

// TODO - colocar no env
const firebaseConfig = {
  apiKey: 'AIzaSyAZ_fNXSOZbhf6fIfn-cxch_rZaLZCyQoA',
  authDomain: 'letmeask-a116d.firebaseapp.com', //process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: 'https://letmeask-a116d-default-rtdb.firebaseio.com', //process.env.REACT_APP_DATABASE_URL,
  projectId: 'letmeask-a116d', //process.env.REACT_APP_PROJECT_ID,
  storageBucket: 'letmeask-a116d.appspot.com', //process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: '837643561410', //process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: '1:837643561410:web:0d4cc312d34596cd6a0e5b', //process.env.REACT_APP_APP_ID
};

console.log('firebaseConfig', firebaseConfig)

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }