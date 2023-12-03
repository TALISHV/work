//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCq53A7dTvTVWKanor7EXIP3SxntmsTnvU",
      authDomain: "pratice-activity-ade94.firebaseapp.com",
      databaseURL: "https://pratice-activity-ade94-default-rtdb.firebaseio.com",
      projectId: "pratice-activity-ade94",
      storageBucket: "pratice-activity-ade94.appspot.com",
      messagingSenderId: "380579548198",
      appId: "1:380579548198:web:6dae5c40274a827d8e6ae7"
    };

    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index copy.html";
}