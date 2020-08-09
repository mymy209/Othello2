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
mother.addEventListener('click', e => {
    console.log(e.target.id);
  });

/*----- functions -----*/
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

    render();
}


function render() {
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


