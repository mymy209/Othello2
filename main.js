/*----- constants -----*/
const LOOKUP = {
  '1': 'black', 
  '-1': 'white',
  null: 'green' 
}

const GRIDS = 64;
const EDGE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 15, 23, 31, 39, 47, 55, 63, 57, 58, 59, 60, 61, 62, 63];


/*----- app's state (variables) -----*/
let board;
let player; 
let blackCount; 
let whiteCount; 

/*----- cached element references -----*/
let mother = document.getElementById('mother');
let turn = document.getElementById('turn');
let blackCountDisplay = document.getElementById('blackCount');
let whiteCountDisplay = document.getElementById('whiteCount');


//create board 
for (let i=0; i < GRIDS; i++) {
let element = document.createElement('div');
let circle = document.createElement('div');
circle.id = i; 
circle.classList.add('circle');
element.appendChild(circle);
element.classList.add('eachGrid');
mother.appendChild(element);
}

/*----- event listeners -----*/
mother.addEventListener('click', e => {
board[e.target.id] = player;  
console.log(player);
flip(e); 
player *= -1;
counter(); 
render(); 
});

function init() {
  board = new Array(GRIDS).fill(null);
  board[28] = 1; 
  board[35] = 1; 
  board[27] = -1;
  board[36] = -1; 
  player = 1; 
  blackCount = 2; 
  whiteCount = 2; 
  render();
}


/*----- functions -----*/
function render() {
board.forEach((element, idx) => {
  document.getElementById(idx).style.backgroundColor = LOOKUP[element];
});
//change turn display
if (player === 1){
  turn.textContent = 'BLACK';
} else {
  turn.textContent = 'WHITE';
}
//change count display
whiteCountDisplay.textContent = whiteCount; 
blackCountDisplay.textContent = blackCount; 
}

function flip(e) {
  console.log(e.target.id);
  let elementID = parseInt(e.target.id);
  //RIGHT
  if (board[elementID + 1] === player * -1) {
    console.log('right');
    let counter = 1;
    //check if sandwiched
    let checkingIdx = elementID + counter;
    while ((board[checkingIdx] === player * -1) && !EDGE.includes(checkingIdx)) { 
      counter += 1; 
      checkingIdx = elementID + counter; 
    }
    if (board[checkingIdx] === player){
      counter = 1; 
      while (board[elementID + counter] === player * -1){
        board[elementID + counter] = player; 
        counter += 1;
      }
    }
  }
  //LEFT
  if (board[elementID - 1] === player * -1) {
    console.log('left');
    let counter = 1;
    //check if sandwiched
    let checkingIdx = elementID - counter;
    while ((board[checkingIdx] === player * -1) && !EDGE.includes(checkingIdx)) { 
      counter += 1; 
      checkingIdx = elementID - counter; 
    }
    if (board[checkingIdx] === player){
      counter = 1; 
      while (board[elementID - counter] === player * -1){
        board[elementID - counter] = player; 
        counter += 1;
      }
    }
  }
  //DIAGNAL RIGHT UP
  if (board[elementID - 7] === player * -1) {
    console.log('diagnal right up');
    let counter = 7;
    //check if sandwiched
    let checkingIdx = elementID - counter;
    while ((board[checkingIdx] === player * -1) && !EDGE.includes(checkingIdx)) { 
      counter += 7; 
      checkingIdx = elementID - counter; 
    }
    if (board[checkingIdx] === player){
      counter = 7; 
      while (board[elementID - counter] === player * -1){
        board[elementID - counter] = player; 
        counter += 7;
      }
    }
  }
  //DIAGNAL RIGHT DOWN
  if (board[elementID + 9] === player * -1) {
    console.log('diagnal right down');
    let counter = 9;
    //check if sandwiched
    let checkingIdx = elementID + counter;
    while ((board[checkingIdx] === player * -1) && !EDGE.includes(checkingIdx)) {
      counter += 9; 
      checkingIdx = elementID + counter; 
    }
    if (board[checkingIdx] === player){
      counter = 9; 
      while (board[elementID + counter] === player * -1){
        board[elementID + counter] = player; 
        counter += 9;
      }
    }
  }
  //DIAGNAL LEFT UP
  if (board[elementID - 9] === player * -1) {
    console.log('diagnal left up');
    let counter = 9;
    //check if sandwiched
    let checkingIdx = elementID - counter;
    while ((board[checkingIdx] === player * -1) && !EDGE.includes(checkingIdx)) {
      counter += 9; 
      checkingIdx = elementID - counter; 
    }
    if (board[checkingIdx] === player){
      counter = 9; 
      while (board[elementID - counter] === player * -1){
        board[elementID - counter] = player; 
        counter += 9;
      }
    }
  }
  //diagnal left down
  if (board[elementID + 7] === player * -1) {
    console.log('diagnal left down');
    let counter = 7;
    //check if sandwiched
    let checkingIdx = elementID + counter;
    while ((board[checkingIdx] === player * -1) && !EDGE.includes(checkingIdx)) {
      counter += 7; 
      checkingIdx = elementID + counter; 
    }
    if (board[checkingIdx] === player){
      counter = 7; 
      while (board[elementID + counter] === player * -1){
        board[elementID + counter] = player; 
        counter += 7;
      }
    }
  }
  //up 
  if (board[elementID - 8] === player * -1) {
    console.log('up');
    let counter = 8;
    //check if sandwiched
    let checkingIdx = elementID - counter;
    while ((board[checkingIdx] === player * -1) && !EDGE.includes(checkingIdx)) {
      counter += 8; 
      checkingIdx = elementID - counter; 
    }
    if (board[checkingIdx] === player){
      counter = 8; 
      while (board[elementID - counter] === player * -1){
        board[elementID - counter] = player; 
        counter += 8;
      }
    }
  }
  //down
  if (board[elementID + 8] === player * -1) {
    console.log('down');
    let counter = 8;
    //check if sandwiched
    let checkingIdx = elementID + counter;
    while ((board[checkingIdx] === player * -1) && !EDGE.includes(checkingIdx)) {
      counter += 8; 
      checkingIdx = elementID + counter; 
    }
    if (board[checkingIdx] === player){
    counter = 8; 
      while (board[elementID + counter] === player * -1){
        board[elementID + counter] = player; 
        counter += 8;
      }
    }
  }
}

function counter(){
  blackCount = 0; 
  whiteCount = 0; 
  board.forEach(function (grid){
    if (grid === 1) {
      blackCount++; 
    }
    if (grid === -1) {
      whiteCount++; 
    }
  })
}

init(); 