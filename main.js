//shortcuts to buttons etc
var tl = document.getElementById('button-tl');
var tc = document.getElementById('button-tc');
var tr = document.getElementById('button-tr');
var ml = document.getElementById('button-ml');
var mc = document.getElementById('button-mc');
var mr = document.getElementById('button-mr');
var bl = document.getElementById('button-bl');
var bc = document.getElementById('button-bc');
var br = document.getElementById('button-br');
var allSquares = [tl, tc, tr, ml, mc, mr, bl, bc, br];
var xw = document.getElementById('x-wins');
var ow = document.getElementById('o-wins');
var resetB = document.getElementById('reset-board');
var resetS = document.getElementById('reset-scores');

// Create button event listeners
var tlButton = tl.addEventListener('click',button_id);
var tcButton = tc.addEventListener('click',button_id);
var trButton = tr.addEventListener('click',button_id);
var mlButton = ml.addEventListener('click',button_id);
var mcButton = mc.addEventListener('click',button_id);
var mrButton = mr.addEventListener('click',button_id);
var blButton = bl.addEventListener('click',button_id);
var bcButton = bc.addEventListener('click',button_id);
var brButton = br.addEventListener('click',button_id);
var resetBButton = resetB.addEventListener('click',resetBoard);
var resetSButton = resetS.addEventListener('click',resetScores);

//other variables
var xWins = 0;
var oWins = 0;

// set up winning line arrays
// rows
arrTop = ['top-left', 'top-centre', 'top-right'];
arrMid = ['mid-left', 'mid-centre', 'mid-right'];
arrBottom = ['bottom-left', 'bottom-centre', 'bottom-right'];
// columns
arrleft = ['top-left', 'mid-left', 'bottom-left'];
arrCentre = ['top-centre', 'mid-centre', 'bottom-centre'];
arrRight = ['top-right', 'mid-right', 'bottom-right'];
// diagonals
arrDiaDown = ['top-left', 'mid-centre', 'bottom-right'];
arrDiaUp = ['bottom-left', 'mid-centre', 'top-right'];

// logic to cycle betwixt o and x
var oxCounter = 1;
function ox() {
  var oxy;
  if (oxCounter % 2 === 0) {
    oxy = 'o';
    console.log('o');
  } else {
    oxy = 'x'
    console.log('x');
  };
  oxCounter++;
  return oxy;
};

function button_id () {
  if (this.innerHTML === '-') {
    oxxy = ox();
    console.log(this.id);
    this.innerHTML = oxxy;
    if (oxxy === 'x') {
      this.className = 'button-x';
    } else {
      this.className = 'button-o';
    }
    winChecker();
  }; 
};


function winChecker() {
  // create 3-character strings reflecting current state of each winning line
  winTop = tl.innerHTML + tc.innerHTML + tr.innerHTML;
  winMid = ml.innerHTML + mc.innerHTML + mr.innerHTML;
  winBottom = bl.innerHTML + bc.innerHTML + br.innerHTML;
  winLeft = tl.innerHTML + ml.innerHTML + bl.innerHTML;
  winCentre = tc.innerHTML + mc.innerHTML + bc.innerHTML;
  winRight = tr.innerHTML + mr.innerHTML + br.innerHTML;
  winDiaDown = tl.innerHTML + mc.innerHTML + br.innerHTML;
  winDiaUp = tr.innerHTML + mc.innerHTML + bl.innerHTML;
  fullBoard = winTop + winMid + winBottom;

  console.log(winTop);
  console.log(winMid);
  console.log(winBottom);
  console.log(winLeft);
  console.log(winCentre);
  console.log(winRight);
  console.log(winDiaDown);
  console.log(winDiaUp);
  console.log(fullBoard);

  //create an array of winning line strings (see above) and check each for xxx or ooo
  trios = [winTop, winMid, winBottom, winLeft, winCentre, winRight, winDiaDown, winDiaUp];
  for (var i = 0, len = trios.length; i < len; i++) {
    if (trios[i] === 'xxx') {
      xWins++;
      xw.innerHTML = xWins;
      console.log("X WINS!");
      alert("X wins!  Well done, you're so skillful!");
      resetBoard();
    } else if (trios[i] === 'ooo') {
      oWins++;
      ow.innerHTML = oWins;
      console.log("O WINS!");
      alert("O wins!  X is such a dick.");
      resetBoard();
    };
  };
  if (fullBoard.indexOf('-') === 0-1) {
    alert("Stalemate!  Try again.");
    resetBoard();
  }
};

//reset the board
function resetBoard() {
  for (var i = 0, len = allSquares.length; i < len; i++) {
    allSquares[i].innerHTML = "-";
    allSquares[i].className = "button";
  }
}

//reset scores
function resetScores() {
  xWins = 0;
  oWins = 0;
  xw.innerHTML = xWins;
  ow.innerHTML = oWins;
}



// ADDITIONS REQUIRED
// 1) problem of double scoring not fixed if two simultaneous winning lines exist
// 2) stalemate message after final cell selected as winner
// 3) no computer version




