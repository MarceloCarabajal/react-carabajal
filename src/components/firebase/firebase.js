import {initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqZpODLx4Pk8itXMvR_VxRdnAU75JdPp8",
    authDomain: "mstar-d542c.firebaseapp.com",
    projectId: "mstar-d542c",
    storageBucket: "mstar-d542c.appspot.com",
    messagingSenderId: "877468555424",
    appId: "1:877468555424:web:cacb89fc5226296724d1c5"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)