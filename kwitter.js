function click_login(){
    user_name = document.getElementById("Text").value;

    localStorage.setItem("Save_username",user_name);

    window.location = "kwitter_room.html";
}

