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

console.log(username, room);