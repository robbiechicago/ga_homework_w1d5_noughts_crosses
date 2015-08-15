// Create button event listeners
var tlButton = document.getElementById('button-tl').addEventListener('click',button_id);
var tcButton = document.getElementById('button-tc').addEventListener('click',button_id);
var trButton = document.getElementById('button-tr').addEventListener('click',button_id);
var mlButton = document.getElementById('button-ml').addEventListener('click',button_id);
var mcButton = document.getElementById('button-mc').addEventListener('click',button_id);
var mrButton = document.getElementById('button-mr').addEventListener('click',button_id);
var blButton = document.getElementById('button-bl').addEventListener('click',button_id);
var bcButton = document.getElementById('button-bc').addEventListener('click',button_id);
var brButton = document.getElementById('button-br').addEventListener('click',button_id);

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
  oxxy = ox();
  console.log(this.id);
  this.innerHTML = oxxy;
  
}














