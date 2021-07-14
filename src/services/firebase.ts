import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB1RIoiYycetpVgobL71Oty0S290v0zExQ",
    authDomain: "curriculo-guilerme.firebaseapp.com",
    databaseURL: "https://curriculo-guilerme-default-rtdb.firebaseio.com",
    projectId: "curriculo-guilerme",
    storageBucket: "curriculo-guilerme.appspot.com",
    messagingSenderId: "798389451402",
    appId: "1:798389451402:web:6ec7e567fdc31a23598b73",
    measurementId: "G-H60DSKKNYR"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database()


export {firebase, database}