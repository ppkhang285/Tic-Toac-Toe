const ORadius= sizeUnit /4;


function changeturn(){
    if (turn=="O"){
        turn="X";
    }
    else if (turn=="X") {
        turn="O";
    }
}
function drawtick(row, col, turn) {
    if (turn=="O"){
     //   console.log("Draw O");
        ctx.beginPath();
            ctx.arc( col * sizeUnit - sizeUnit/2 , row * sizeUnit - sizeUnit/2 , ORadius ,0 , Math.PI*2, false);
            ctx.fillStroke="#000000";
            ctx.stroke();
        ctx.closePath();
      //  changeturn();
    }
    else if (turn=="X") {
       // console.log("Draw X");
        ctx.beginPath();
            ctx.fillStyle="#000000";
            ctx.moveTo( (col-1)*sizeUnit + ORadius  ,   ( row - 1)*sizeUnit + ORadius  );
            ctx.lineTo( col*sizeUnit - ORadius  ,   row*sizeUnit - ORadius );
            ctx.stroke();
            ctx.moveTo( (col-1)*sizeUnit + ORadius , row*sizeUnit - ORadius );
            ctx.lineTo( col*sizeUnit - ORadius ,  ( row - 1)*sizeUnit + ORadius );
            ctx.stroke();
        ctx.closePath();
      //  changeturn();
    }
}