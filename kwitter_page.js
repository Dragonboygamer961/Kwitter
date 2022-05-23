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
  name_room = localStorage.getItem("Room_Name");
  
  document.getElementById("welcome").innerHTML = "Welcome " + user_name + " to "  + name_room;

  function Send(){

    new_msg = document.getElementById("msg").value;

    firebase.database().ref(name_room).push({
        Name: user_name,
        Message : new_msg,
        Like : 0
    });

    document.getElementById("msg").value = "";
  }


  function get_Data(){

    firebase.database().ref(name_room).on("value", function(snapshot){

      document.getElementById("output").value = "";
      snapshot.forEach(function(childSnapshot){
        child_key = childSnapshot.key;
        child_data = childSnapshot.val();

        if(child_key != "purpose"){

          firebase_id = child_key;
          message_data = child_data;
          new_name = message_data['Name'];
          new_message = message_data['Message'];
          new_like = message_data['Like'];

          name_tag = "<h4>"+new_name +"</h4>";

          message_tag = "<h4 class = 'message_h4' >"+new_message +"</h4>";

          like_tag = "<button class = 'btn btn-danger' id = "+ firebase_id +" value = "+ new_like +" onclick = 'update_like(this.id)' ><span class = 'glyphicon glyphicon-thumbs-up' > Like: "+ new_like +" </span> </button> <hr>"
          
          new_chat = name_tag + message_tag +  like_tag ;
          
          document.getElementById("output").value += new_chat;
        }

      });

    });


  }

  get_Data();

  function update_like(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		Like : updated_likes  
	 });

}

function Logout(){
  localStorage.removeItem("Save_username");
  localStorage.removeItem("Room_Name");
window.location = "index.html";     
}