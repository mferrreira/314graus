import firebase from 'firebase'
import 'firebase/firestore'

if(firebase.apps.lengh) {
    firebase.initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectID: process.env.FIREBASE_PROJECT_ID
    })
}

export default firebase