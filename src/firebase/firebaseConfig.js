import { initializeApp} from 'firebase/app'

import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDxypmowxeaSLhuD3WsdtH5dEg9r3uvw-c",
    authDomain: "messaging-app-20904.firebaseapp.com",
    projectId: "messaging-app-20904",
    storageBucket: "messaging-app-20904.appspot.com",
    messagingSenderId: "667899307839",
    appId: "1:667899307839:web:928afe4b678eacbb35158a",
    measurementId: "G-TGJZW3ZPLV"
};

export const firebase = initializeApp( firebaseConfig )
export const auth = getAuth( firebase )
export const db = getFirestore( firebase );