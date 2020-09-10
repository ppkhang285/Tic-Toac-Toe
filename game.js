var canvas= document.createElement("canvas");
var ctx= canvas.getContext("2d");
var turn="O";
var count=0;
const player= "O";
const ai= "X";
const GAME_WIDTH=300;
const GAME_HEIGHT= GAME_WIDTH; 
const players={
    "O" : "PLAYER 1",
    "X" : "PLAYER 2"
}
const scores= {
    "X": 10 ,
    "O": -10 ,
    "tie": 0
}
//Tao Canvas
document.body.appendChild(canvas);
canvas.width=GAME_WIDTH;
canvas.height= GAME_HEIGHT;
//
var playerFirst = confirm("YOU WANT TO GO FIRST?");