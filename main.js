/*----- constants -----*/
const LOOKUP = {
    '1': 'black', 
    '-1': 'white',
    null: 'green' 
 }
  
const GRIDS = 64;

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
  let elementID = parseInt(e.target.id);
  console.log(elementID);
  //right
  /*if (board[elementID + 1] === player * -1) {
    console.log('right');
    let counter = 1;
    if (elementID < 7) {
      let edge = 7; 
      canFlip(elementID);
      }
    } else if (elementID < 15) {

    } else if (elementID <23) {

    } else if (elementID < 31) {

    } else if (elementID < 39) {

    } else if (elementID < 47) {

    } else if (elementID < 55) {

    } else if (elementID < 63) {

    }
    //flip in board array
    while (board[elementID + counter] === player * -1){
      board[elementID + counter] = player; 
      counter += 1;
    }
  */
  //left
  if (board[elementID - 1] === player * -1) {
    console.log('left');
    let counter = 1;
    if (elementID > 56) {
      console.log('I ran');
      if (canFlip(elementID, 56)) {
        while (board[elementID - counter] === player * -1){
          board[elementID - counter] = player; 
          counter += 1;
        }
      }
      }
    } else if (elementID > 48) {
      console.log('I ran');
      if (canFlip(elementID, 48)) {
        while (board[elementID - counter] === player * -1){
          board[elementID - counter] = player; 
          counter += 1;
        }
      }

    } else if (elementID > 40) {
      console.log('I ran');
      if (canFlip(elementID, 40)) {
        while (board[elementID - counter] === player * -1){
          board[elementID - counter] = player; 
          counter += 1;
        }
      }

    } else if (elementID > 32) {
      console.log('I ran');
      if (canFlip(elementID, 32)) {
        while (board[elementID - counter] === player * -1){
          board[elementID - counter] = player; 
          counter += 1;
        }
      }

    } else if (elementID > 24) {
      console.log('I ran');
      if (canFlip(elementID, 24)) {
        while (board[elementID - counter] === player * -1){
          board[elementID - counter] = player; 
          counter += 1;
        }
      }

    } else if (elementID > 16) {
      console.log('I ran');
      if (canFlip(elementID, 16)) {
        while (board[elementID - counter] === player * -1){
          board[elementID - counter] = player; 
          counter += 1;
        }
      }

    } else if (elementID > 8) {
      console.log('I ran');
      if (canFlip(elementID, 8)) {
        while (board[elementID - counter] === player * -1){
          board[elementID - counter] = player; 
          counter += 1;
        }
      }

    } else if (elementID > 0) {
      console.log('I ran');
      if (canFlip(elementID, 0)) {
        while (board[elementID - counter] === player * -1){
          board[elementID - counter] = player; 
          counter += 1;
        }
      }
    }
  }
    
  /*
  //diagnal right up
  if (board[elementID - 7] === player * -1) {
    console.log('diagnal right up');
    let counter = 7;
    while (board[elementID - counter] === player * -1){
      board[elementID - counter] = player; 
      counter += 7;
    }
  }
  //diagnal right down
  if (board[elementID + 9] === player * -1) {
    console.log('diagnal right down');
    let counter = 9;
    while (board[elementID + counter] === player * -1){
      board[elementID + counter] = player; 
      counter += 9;
    }
  }
  //diagnal left up
  if (board[elementID - 9] === player * -1) {
    console.log('diagnal left up');
    let counter = 9;
    while (board[elementID - counter] === player * -1){
      board[elementID - counter] = player; 
      counter += 9;
    }
  }
    //diagnal left down
    if (board[elementID + 7] === player * -1) {
      console.log('diagnal left down');
      let counter = 7;
      while (board[elementID + counter] === player * -1){
        board[elementID + counter] = player; 
        counter += 7;
      }
    }
    //up 
    if (board[elementID - 8] === player * -1) {
      console.log('up');
      let counter = 8;
      while (board[elementID - counter] === player * -1){
        board[elementID - counter] = player; 
        counter += 8;
      }
    }
    //down
    if (board[elementID + 8] === player * -1) {
      console.log('down');
      let counter = 8;
      while (board[elementID + counter] === player * -1){
        board[elementID + counter] = player; 
        counter += 8;
      }
    }
  }
*/


function canFlip(elementID, edge) {
  while ((elementID + counter) !== edge) {
    if ((elementID + counter) === null) {
      return false; 
    } else if ((elementID + counter) === player) {
      return false; 
    } else if ((elementID + counter) === player * -1) {
      return true; 
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
  });
}

init(); 
