const firebaseConfig = {
  apiKey: "AIzaSyCkifQUEZxbZNk0zrtasHNZC19WH7M5hns",
  authDomain: "kwitter-f7b44.firebaseapp.com",
  databaseURL: "https://kwitter-f7b44-default-rtdb.firebaseio.com",
  projectId: "kwitter-f7b44",
  storageBucket: "kwitter-f7b44.appspot.com",
  messagingSenderId: "909721523108",
  appId: "1:909721523108:web:52ad917bfa451d3619a731"
};

const app = initializeApp(firebaseConfig);

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

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

