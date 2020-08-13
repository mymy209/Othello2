/*----- constants -----*/
const lookup = {
    '1': 'black',
    '-1': 'white'
}

const edge = [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 15, 23, 31, 39, 47, 55, 63, 57, 58, 59, 60, 61, 62];

/*----- app's state (variables) -----*/
let board, turn, winner, blackScore, whiteScore

/*----- cached element references -----*/
// const squares = the whole grid
// white and black score

/*----- event listeners -----*/
//listen for user click using event delegation (cached whole grid )
//replay button

/*----- functions -----*/
/* init()
    initiate board with 2 blacks, 2 whites in the center of board
    board[0-26, 29-34, 37-63] = null, board[27, 36] = -1, board[28, 35] = 1 
    
    turn will be set to black (turn=1)
    winner = null; 
    render()

/* handleGridClick(e)
    if isGameOver(), return; 
    if validChoice() false, return
    
    find e.target.id to update board array

    render()


/* render() {
    iterate board array and update board on screen
    board.forEach(function(sq, idx) {
    squares[idx].style.background = lookup[sq];
    });

    switch turn (turn *= -1)
    
    getWinner()
    update each score on screen


/* validChoice()
    1.check board[idx] isn't chosen already
    2.check above, down, and both diagnal if other color is touching chosen grid
      up/down: index +-8
      diagnal: index +-7
      must use "edge"
    flip() is true
        if above conditions aren't met, return false


/* flip() 
    check how many can be changed (black -> white, white -> black)
    must use "edge" to stop counter (+-7, +-8)
    return the index of grids that must be updated in board array
    board[idx] = turn;
    check if flippable{
        1. keep adding count to index 
            a. if it hits null during that process, exit the loop --> do not change board
            b. if find same color --> change board
            c. if hits edge, exit loop --> do not change board
    }
        if can't flip anything, return false


/* isGameOver()
    1. no more possible moves (??????)
    2. board array is filled

    winner = truthy
    getScore()
    replay button is visible when game over

/* getScore()
    counts blacks and whites on the board, blackScore & whiteScore

    iterate through board array that stores each input, and calculate whites and black
    whoever who has more count is the winner 

    update winner
*/