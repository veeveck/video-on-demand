import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGlQFGHQbVCnEjc-E63s6kXoLwjHIHpXI",
    authDomain: "netflix-d8588.firebaseapp.com",
    projectId: "netflix-d8588",
    storageBucket: "netflix-d8588.appspot.com",
    messagingSenderId: "664835171012",
    appId: "1:664835171012:web:953e3d17d1316f5c635f91"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth}
  export default db;