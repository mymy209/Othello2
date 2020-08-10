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
    player *= -1; 
    render(); 
    console.log(player);
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