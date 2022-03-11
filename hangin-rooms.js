  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCUoR-iZTg8HgX8rexKkDvXqW7lT312gys",
    authDomain: "hangin-27aed.firebaseapp.com",
    projectId: "hangin-27aed",
    storageBucket: "hangin-27aed.appspot.com",
    messagingSenderId: "351317818438",
    appId: "1:351317818438:web:1d781ca184b33f128e1e47"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
