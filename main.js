const LOOKUP = {
    '1': 'black', 
    '-1': 'white',
    null: 'green' 
 }
  
  const GRIDS = 64;
  
  let mother = document.getElementById('mother');
  
  let board;
  let player; 
  
  console.log(mother);
  
  for (let i=0; i < GRIDS; i++) {
    let element = document.createElement('div');
    let circle = document.createElement('div');
    circle.id = i; 
    circle.classList.add('circle');
    element.appendChild(circle);
    element.classList.add('eachGrid');
    mother.appendChild(element);
  }
  
  mother.addEventListener('click', e => {
    board[e.target.id] = player;  
    console.log(player);
    flip(e); 
    player *= -1;
    render(); 
  });
  
  function init() {
    board = new Array(GRIDS).fill(null);
    board[28] = 1; 
    board[35] = 1; 
    board[27] = -1;
    board[36] = -1; 
    player = 1; 
    render();
  }
  
  function render() {
    board.forEach((element, idx) => {
      document.getElementById(idx).style.backgroundColor = LOOKUP[element];
    });
  }
  
  init(); 

  function flip(e) {
    console.log(e.target.id);
    //right
    if (board[e.target.id + 1] === player * -1) {
      console.log('right');
      let counter = 1;
      while (board[e.target.id + counter] === player * -1){
        board[e.target.id + counter] = player; 
        counter += 1;
      }
    }
    //left
    if (board[e.target.id - 1] === player * -1) {
      console.log('left');
      let counter = 1;
      while (board[e.target.id - counter] === player * -1){
        board[e.target.id - counter] = player; 
        counter += 1;
      }
    }
    //diagnal right up
    if (board[e.target.id - 7] === player * -1) {
      console.log('diagnal right up');
      let counter = 7;
      while (board[e.target.id - counter] === player * -1){
        board[e.target.id - counter] = player; 
        counter += 7;
      }
    }
    //diagnal right down
    if (board[e.target.id + 9] === player * -1) {
      console.log('diagnal right down');
      let counter = 9;
      while (board[e.target.id + counter] === player * -1){
        board[e.target.id + counter] = player; 
        counter += 9;
      }
    }
    //diagnal left up
    if (board[e.target.id - 9] === player * -1) {
      console.log('diagnal left up');
      let counter = 9;
      while (board[e.target.id - counter] === player * -1){
        board[e.target.id - counter] = player; 
        counter += 9;
      }
    }
    //diagnal left down
    if (board[e.target.id + 7] === player * -1) {
      console.log('diagnal left down');
      let counter = 7;
      while (board[e.target.id + counter] === player * -1){
        board[e.target.id + counter] = player; 
        counter += 7;
      }
    }
    //up 
    if (board[e.target.id - 8] === player * -1) {
      console.log('up');
      let counter = 8;
      while (board[e.target.id - counter] === player * -1){
        board[e.target.id - counter] = player; 
        counter += 8;
      }
    }
    //down
    if (board[e.target.id + 8] === player * -1) {
      console.log('down');
      let counter = 8;
      while (board[e.target.id + counter] === player * -1){
        board[e.target.id + counter] = player; 
        counter += 8;
      }
    }

    
    
  }
      
  