
(function (window) {
    'use strict';
    var App = window.App || {};
    var FirebaseConfig = {
        apiKey: "AIzaSyDgqAT-mNNjkVVEZzQ59lsSTzBHBh9Op0w",
        authDomain: "coffeerun-f1fb4.firebaseapp.com",
        projectId: "coffeerun-f1fb4",
        storageBucket: "coffeerun-f1fb4.appspot.com",
        messagingSenderId: "656157085446",
        appId: "1:656157085446:web:965f7fe3337578395d5887",
        measurementId: "G-E8RPFXZPLX"
};
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;
})(window);

