var firebaseConfig = {
  apiKey: "AIzaSyBTVZ1Hsop9Jt8k0mHEXegYSRWoZS3cQnE",
  authDomain: "igishka2-tssixm.firebaseapp.com",
  databaseURL: "https://newagent-fhepbr.firebaseio.com",
  projectId: "igishka2-tssixm",
  storageBucket: "igishka2-tssixm.appspot.com",
  messagingSenderId: "14896371054",
  appId: "1:14896371054:web:fc4e1d55b42d5a7f41dd7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function updateLike(message_id)
{
  console.log("clicked on like button  - " + message_id);
  button_id = message_id;
  like = document.getElementById(button_id).value;
  updatelike =Number(like)  +  1;
  console.log(updatedlike);

  firebase.database().ref(room_name).child(message_id).update({});
}


function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
