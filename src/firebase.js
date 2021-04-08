import * as firebase from 'firebase/firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOXCAH3iwGREbJHTck8308GIDQO2SA4pY",
  authDomain: "linkedin-clone-4e180.firebaseapp.com",
  projectId: "linkedin-clone-4e180",
  storageBucket: "linkedin-clone-4e180.appspot.com",
  messagingSenderId: "530645139090",
  appId: "1:530645139090:web:877b4e6ea76ecd8c21304b"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export{ db, auth};