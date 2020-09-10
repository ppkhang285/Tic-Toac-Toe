const boardSize=GAME_HEIGHT;
const boardUnit=boardSize /100;
const sizeUnit= boardSize / boardUnit;

var boardData= [
    ['','',''],
    ['','',''],
    ['','','']
];

//draw column lines

for ( var c = 1; c <= boardUnit; c++ ){
    ctx.beginPath();
    ctx.fillStyle= "#000000";
    ctx.moveTo( c*sizeUnit,0 );
    ctx.lineTo( c*sizeUnit, canvas.height );
    ctx.stroke();
    ctx.closePath();
}

//draw row lines

for ( var r = 1; r <= boardUnit; r++ ){
    ctx.beginPath();
    ctx.fillStyle= "#000000";
    ctx.moveTo( 0 , r*sizeUnit );
    ctx.lineTo( canvas.width , r* sizeUnit );
    ctx.stroke();
    ctx.closePath();
}

function drawCurrentBoard(){
    for ( var r=0 ; r < boardUnit  ; r++){
        for ( var c=0; c< boardUnit ; c++){
           // console.log(boardData[r][c]);
            drawtick(r+1 , c+1 , boardData[r][c]);
        }
    }
}
function DtaBoard(row, col, turn){
    boardData[row-1,col-1]= turn;
}

function bestMove(){
    //AI make turn
    var bestScore= -Infinity;
    var Move;
    for (var i=0 ; i< boardUnit  ;i++){
        for (var j=0 ; j< boardUnit ;j++){
            if (boardData[i][j]== ""){
                boardData[i][j] = ai;
                var score = minimax(boardData , 0 , false);
                boardData[i][j]= "";
                if (score > bestScore){
                    bestScore = score;
                    Move={ i, j };
                }
            }
        }
    }
    boardData[Move.i][Move.j] = ai;
}
function minimax(board , depth , isMaximizing){
    var result = checkWinner();
    if (result != null){
        return scores[result];
    }
    if (isMoveLeft(board) == false ){
        return 0;
    }
    if (isMaximizing){
        var bestScore = - Infinity;
        for (var i=0 ; i< boardUnit  ;i++){
            for (var j=0 ; j< boardUnit  ;j++){
                if (board[i][j]== ""){
                    board[i][j]= ai;
                    var score = minimax(board , depth+1 , false) - depth;
                    board[i][j]= "";
                    bestScore = Math.max(bestScore , score);                   
                }
            }
        }
        return bestScore;
    }
    else {
        var bestScore = Infinity;
        for (var i=0 ; i< boardUnit ;i++){
            for (var j=0 ; j<boardUnit ;j++){
                if (board[i][j]== ""){
                    board[i][j] = player;boardUnit 
                    var score = minimax(board, depth+1 , true) + depth;
                    board[i][j]= "";
                    bestScore = Math.min(bestScore , score);                   
                }
            }
        }
        return bestScore;
    }
}
function isMoveLeft(board){
    for (var i=0 ; i< boardUnit ;i++){
        for (var j=0 ; j< boardUnit ;j++){
            if (board[i][j]== ""){
               return true;            
            }
        }
    }
    return false;
}