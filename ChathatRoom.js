
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
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name" 
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index copy.html";
}