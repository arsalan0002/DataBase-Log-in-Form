// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
    getDatabase, ref, set, onChildAdded
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPif-tOzbik0cDXN6QHR5YV5sJUXhVY_o",
    authDomain: "detabase-57381.firebaseapp.com",
    databaseURL: "https://detabase-57381-default-rtdb.firebaseio.com",
    projectId: "detabase-57381",
    storageBucket: "detabase-57381.appspot.com",
    messagingSenderId: "99448913772",
    appId: "1:99448913772:web:e2af08d2b7a5cff73cbd49",
    measurementId: "G-DVVWWCZC9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var parent = document.getElementById('parent')

function getData() {
    let arr = [];
    const reference = ref(db, "students/");
    onChildAdded(reference, function (dt) {
        // console.log(dt.val());
        arr.push(dt.val());
        parent.innerHTML = "";

        for (var i = 0; i < arr.length; i++) {
            parent.innerHTML += 
  };

    });
}
