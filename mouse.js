document.addEventListener("click", drawplayer, false);
var Mx=null;
var My=null;
function getMousePos(e){

    Mx= e.clientX - canvas.offsetLeft;
    My= e.clientY - canvas.offsetTop;
    Mx= parseInt((Mx /100) +1);
    My= parseInt((My /100) +1);

} 

function aiFirst(){
    bestMove();
    drawCurrentBoard();
    count++;
}

if (playerFirst == false ){
     aiFirst();
}
function drawplayer(e){
    getMousePos(e);
    if ( Mx>=1  && Mx<=boardUnit  && My>=1  && My<=boardUnit  && boardData[My-1][Mx-1] ==''){
        //Thay doi Board
        boardData[My-1][Mx-1] = turn;
        //Ve board
        drawCurrentBoard();
        //Tang bien diem luot
        count++;
        //check win
        check();
        //doi luot
        changeturn();
        //Ai turn neu Board con trong
        if (isMoveLeft(boardData) ) {
            bestMove();
            drawCurrentBoard();
            count++;
        }
        check();
        changeturn();
        //Neu luot >= 9 thi end game va thong bao Draw
        if (count >= boardUnit *boardUnit) drawAlert();
    }

}
function isWin(Wcheck , first){
    if (Wcheck==true){
        alert(players[first]+" WIN");
        document.location.reload();
    }
}


function winAlert(turn){
    alert(players[turn]+" WIN");
    //document.location.reload();
}

function drawAlert(){
    alert("DRAW");
 //   document.location.reload();
}

function checkWinner(){
    var b=boardData;
    //check row
    for (var i=0 ; i<boardUnit ;i++){
        if (b[i][0] == b[i][1] && b[i][1]== b[i][2] && b[i][0]!=''){
           return b[i][0];
        }   
    }

    //check column
    for (var i=0 ; i< boardUnit; i++){
        if ( b[0][i] == b[1][i] && b[1][i] == b[2][i] && b[0][i] !=''){
            return b[0][i];
        }
    }

    //check first cross
    if (b[0][0]== b[1][1] && b[1][1]==b[2][2] && b[0][0] != ''){
        return b[0][0];
    }
    //check second cross
    if (b[0][2]== b[1][1] && b[1][1]==b[2][0] && b[0][2] != ''){
        return b[0][2];
    }
    return null;
}

function check(){
    var winner= checkWinner();
    if (winner != null){
        winAlert(winner);
    }
}