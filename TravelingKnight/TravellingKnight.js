/**
 * Tracking the movement of the knight on a chess board of an arbitary size.
 *
 * 1: Create a 2D array chess board of size n and fill set all the values as false.
 * 2: List all possible movements of the knight that is 8 steps in all
 *    directions when the knight is in the center of the board and less if its palced
 *    on the edges
 * 3: Create an empty array and keep pushing all the steps the knight has moved and set
 *    the checkboard value of that coordinate to that of the move.
 * 4: start traversing the board untill all the blocks has been visited.
 *    return the board with all the steps.
 *
 */

function travellingKnight(x, y, size) {
  const { isValid, message } = checkArguments(x, y, size);
  if (!isValid) {
    console.log(message);
    return [];
  }

  const board = newChessBoard(size);
  return gotoNextPosition(x, y, board, size);
}

/*
NOTE: RUN TRAVELLING KINGHT FUNCTION WITH YOUR CHOICE OF ARGUMENTS AND TEST WEATHER IF WORKS WITH
WITH ARBITRAY ARGUMENTS.
*/
console.log("solution\n ", travellingKnight(0, 0, 5));
////
////
////

//Initialize the chess board with false set in all the blocks.
//size: number
function newChessBoard(size) {
  return [...Array(size)].map((row) => [...Array(size)].map((block) => false));
}

//Is the given coordinate  within the board of given size
//x: number, y:number, size: number
function isValidPosition(x, y, size) {
  return x < size && x >= 0 && x < size && x >= 0;
}

function listOfPossibleSteps(x, y, board, size) {
  const possibleMoves = [];
  const knightsMoves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  knightsMoves.forEach((move) => {
    const newXpos = x + move[0];
    const newYpos = x + move[1];

    //checks if the new position is a valid place on the board
    //and has not already been visited.
    // add the move to list
    if (isValidPosition(newXpos, newYpos, size) && !board[newXpos][newYpos]) {
      possibleMoves.push([newXpos, newYpos]);
    }

    return possibleMoves;
  });
}

//Checks weather all the blocks has been visited using array.every method.
//board: array
function hasAllBlockVisited(board) {
  return board.every((row) => {
    return row.every((block) => {
      return block;
    });
  });
}

function gotoNextPosition(x, y, board, size) {
  console.log("goto,,,", board);
  //Create a clone of the board to set values as true when visited
  let boardClone = board.map((column) => column.slice());

  boardClone[x][y] = true;

  let listOfMoves = listOfPossibleSteps(x, y, board, size) || [];

  if (!!listOfMoves) {
    if (hasAllBlockVisited(boardClone)) {
      return [[x, y]];
    } else {
      return false;
    }
  }

  listOfMoves.forEach((move) => {
    let allVisitedPath = gotoNextPosition(move[0], move[1], boardClone, size);
    if (allVisitedPath.length) {
      allVisitedPath.push(x, y);
      return allVisitedPath;
    }
  });

  return boardClone;
}

function checkArguments(x, y, size) {
  let message = "";
  let isValid = true;

  const invalidArgMessage =
    "\n Entered arguments are invalid, please try again with valid arguments";

  if (size <= 2) {
    message = "Battle field too small" + invalidArgMessage;
    isValid = false;
  } else if (x < 0 || y < 0) {
    message = "Kinght is not on battle field yet." + invalidArgMessage;
    isValid = false;
  } else if (x >= size || y >= size) {
    message = "Knight running away from the battle field." + invalidArgMessage;
    isValid = false;
  }

  return { isValid, message };
}
