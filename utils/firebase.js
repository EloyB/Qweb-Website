import firebase from "firebase/compat/app";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCkb0VzUWhti72IYTF-QqhPXTevh63DgDw",
  authDomain: "qweb-website-d49df.firebaseapp.com",
  projectId: "qweb-website-d49df",
  storageBucket: "qweb-website-d49df.appspot.com",
  messagingSenderId: "64973210509",
  appId: "1:64973210509:web:0238132c32a57c24aa33c4",
  measurementId: "G-1CJJL2Y5B6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const analytics = firebase.analytics;

export { firebase, analytics };
