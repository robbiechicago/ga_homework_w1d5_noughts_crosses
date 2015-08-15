

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



var tlButton = document.getElementById('button-tl').addEventListener('click',button_id);
var tcButton = document.getElementById('button-tc').addEventListener('click',button_id);
var trButton = document.getElementById('button-tr').addEventListener('click',button_id);
var mlButton = document.getElementById('button-ml').addEventListener('click',button_id);
var mcButton = document.getElementById('button-mc').addEventListener('click',button_id);
var mrButton = document.getElementById('button-mr').addEventListener('click',button_id);
var blButton = document.getElementById('button-bl').addEventListener('click',button_id);
var bcButton = document.getElementById('button-bc').addEventListener('click',button_id);
var brButton = document.getElementById('button-br').addEventListener('click',button_id);



function button_id () {
  ox();
  console.log(this.id);
}






