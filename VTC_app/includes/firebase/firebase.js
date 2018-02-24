
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    
    static initialise() {
        firebase.initializeApp({    
            apiKey: "AIzaSyB2soQv_Fh1UdOVA8Zg8vOr_eR0CzjAHWE",
            authDomain: "virtual-time-capsule-cf695.firebaseapp.com",
            databaseURL: "https://virtual-time-capsule-cf695.firebaseio.com",
            projectId: "virtual-time-capsule-cf695",
            storageBucket: "virtual-time-capsule-cf695.appspot.com",
            messagingSenderId: "62193311413"
        });
        
    }
    storage = firebase.storage();
    storageRef = storage.ref();
}

module.exports = Firebase;
