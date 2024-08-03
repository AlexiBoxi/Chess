function getSurroundingSquares(square) { 
    //This should return an array with 8 strings/integers, each either a grid reference or -1. 
    //If it's -1 then that represents a space surrounding where the piece cannot move  
    // This will convert the file to its ASCII character code
    const file = square.charCodeAt(0); 
    // Parse the rank (row) as an integer
    const rank = parseInt(square[1]);

    // This array will hold the surrounding squares
    const surroundingSquares = [];

    // Each pair represents (file offset, rank offset), essentially how much we must adjust the values by to get the new grids
    const adjustments = [
        [-1, 1], [0, 1], [1, 1],  
        [-1, 0],         [1, 0],  
        [-1, -1], [0, -1], [1, -1] 
    ];

    // This will generate the new grids based on the adjustments the above array tells us to do
    for (let adjustment of adjustments) {
        const i = adjustment[0]; 
        const j = adjustment[1];   
        // Vector adjustments

        // Calculate the new file and rank
        const newFile = String.fromCharCode(file + i);
        const newRank = rank + j;

        // This will check if the new file and rank are within the board
        if (newFile >= 'a' && newFile <= 'h' && newRank >= 1 && newRank <= 8) {
            // If valid, add the new grid to the array
            surroundingSquares.push(`${newFile}${newRank}`);
        } else {
            // If invalid, add -1 to the array
            surroundingSquares.push(-1);
        }
    }

    return surroundingSquares;
}

// Example usage:
const testSquare = "c5";
const surroundingSquares = getSurroundingSquares(testSquare);
console.log(surroundingSquares);  // Expected output: [-1, "a2", "b2", -1, "b1", -1, -1, -1]

let board = document.getElementById("board")
let playerDisplay = document.getElementById("player")
let infoDisplay = document.getElementById("info")
const width = 8

const startingPieces = [

]



