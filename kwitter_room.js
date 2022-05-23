

var firebaseConfig = {
      apiKey: "AIzaSyATYDCAXjbPhmxFfYxzHFRyjG56A4m-lLk",
      authDomain: "dragongame-2aa79.firebaseapp.com",
      databaseURL: "https://dragongame-2aa79-default-rtdb.firebaseio.com",
      projectId: "dragongame-2aa79",
      storageBucket: "dragongame-2aa79.appspot.com",
      messagingSenderId: "216718972056",
      appId: "1:216718972056:web:17cf15d3ca65bacd0baced",
      measurementId: "G-RV54REQ0VD"
    };
    
    
    firebase.initializeApp(firebaseConfig);
   

user_name = localStorage.getItem("Save_username");

document.getElementById("welcome").innerHTML = "Welcome : " + user_name ;

function add_new_Room(){

      new_room = document.getElementById("new_Room").value;


      firebase.database().ref("/").child(new_room).update({
            purpose : "adding Room"
      });

      localStorage.setItem("Room_Name",new_room);
      window.location ="kwitter_page.html";

}


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       
            Room_names = childKey;
      //Start code
            row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirect_room(this.id)' > #" + Room_names+ " </div> <hr>";
      document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + row;
      //End code
            });
      });
}
getData();


function Logout(){
      localStorage.removeItem("Save_username");
 window.location = "index.html";     
}


function redirect_room(room_selected){


      localStorage.setItem("Room_Name",room_selected);
      window.location ="kwitter_page.html";

      
}





















