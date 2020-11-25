import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAEcwmrFqH-maY0A8Ht3CVK3_z4WWVXvMo",
    authDomain: "shop-clothing-db-4cfe0.firebaseapp.com",
    databaseURL: "https://shop-clothing-db-4cfe0.firebaseio.com",
    projectId: "shop-clothing-db-4cfe0",
    storageBucket: "shop-clothing-db-4cfe0.appspot.com",
    messagingSenderId: "326180388095",
    appId: "1:326180388095:web:9da7482249534ef974a0ca",
    measurementId: "G-81LPM224RM"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

