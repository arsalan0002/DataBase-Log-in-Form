// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCPif-tOzbik0cDXN6QHR5YV5sJUXhVY_o",
//     authDomain: "detabase-57381.firebaseapp.com",
//     databaseURL: "https://detabase-57381-default-rtdb.firebaseio.com",
//     projectId: "detabase-57381",
//     storageBucket: "detabase-57381.appspot.com",
//     messagingSenderId: "99448913772",
//     appId: "1:99448913772:web:e2af08d2b7a5cff73cbd49",
//     measurementId: "G-DVVWWCZC9T"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import {
     getDatabase, 
     ref,
     set 
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyC1PCulra4NcsoZZ4PzPlKoRwEzgl2UjcA",
   authDomain: "log-in-d5131.firebaseapp.com",
   databaseURL: "https://log-in-d5131-default-rtdb.firebaseio.com",
   projectId: "log-in-d5131",
   storageBucket: "log-in-d5131.appspot.com",
   messagingSenderId: "34737002378",
   appId: "1:34737002378:web:1e98f0961fac202d3a5a73",
   measurementId: "G-98ELKYWWYK"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const database = getDatabase();
var name = document.getElementById("name");
var lastName = document.getElementById("lastName");
var userEmail = document.getElementById("email");
var passWord = document.getElementById("passWord");
var contact = document.getElementById("contact");
var cnic = document.getElementById("cnic");
var qualification = document.getElementById("qualification");
// var inp = document.getElementById("datebase");
window.saveData = function () {
    var obj = {
        // database:inp.value,
        name: name.value,
        lastName: lastName.value,
        userEmail: email.value,
        passWord: passWord.value,
        contact: contact.value,
        cnic: cnic.value,
        qualification: qualification.value
    };

    obj.id = Math.random().toString().slice(2);

    const databaseRef = ref(database, `student/${obj.id}/`);
    set(databaseRef, obj)
        .then(function () {
            window.location.assign('studentlist.html');
        })
        .catch(function (err) {
            console.log(err);
        })

    // window.location.assign('studentlist.html');

    console.log(obj);

};