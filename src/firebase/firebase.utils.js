import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDxYP25R6mWLTTvGhezF-9TkxIjsbkLe1k',
  authDomain: 'mr-pelham-db.firebaseapp.com',
  databaseURL: 'https://mr-pelham-db.firebaseio.com',
  projectId: 'mr-pelham-db',
  storageBucket: '',
  messagingSenderId: '229455624553',
  appId: '1:229455624553:web:9a90401f9e62d72d'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
