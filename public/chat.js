const socket = io();

const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("username");
const room = urlSearch.get("select_room");

//emit = emitir alguma informaçao
//on = escutando alguma informacao

socket.emit("select_room", {
    username,
    room,
});

document.getElementById("message_imput").addEventListener
("keypress", (event) =>{
    if(event.key === 'Enter') {
        const message = event.target.value;
        
        const data = {
          room,
          message,
          username
        }

        socket.emit("message", data);

        event.target.value = "";
    }
})

console.log(username, room);