/*----- constants -----*/
const lookup = {
    '1': 'black',
    '-1': 'white',
    'null': 'green'
}
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
let mother = document.getElementById('mother');

/*----- event listeners -----*/
mother.addEventListener('click', handleClick);

/*----- functions -----*/
function handleClick(e) {
    board[e.target.id] = turn; 
    render();
    turn *= -1;
}
function init() {
    board = [
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, 
        null, null, null, -1, 1, null, null, null, 
        null, null, null, 1, -1, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
    ]
    turn = 1;
    
    //create initial board
    for (let i=0; i < 64; i++) {
        let element = document.createElement('div');
        element.id = i; 
        element.classList.add('eachGrid');
        mother.appendChild(element);
        //create div for color
        let dots = document.createElement('div');
        dots.classList.add('dots');
        element.appendChild(dots);
        dots.style.backgroundColor = lookup[board[i]];
    }
}


function render() {
    //remove previous board
    for (let i=0; i<64; i++) {
        let grid = document.getElementById(i);
        grid.remove();
    }
    //create updated board
    for (let i=0; i < 64; i++) {
        let element = document.createElement('div');
        element.id = i; 
        element.classList.add('eachGrid');
        mother.appendChild(element);
        //create div for color
        let dots = document.createElement('div');
        dots.classList.add('dots');
        element.appendChild(dots);
        dots.style.backgroundColor = lookup[board[i]];
    }

}


init(); 


