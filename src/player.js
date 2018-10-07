const Player = (name, weapon) => {
    return ({name, weapon});
};

const Board = () => {
    let gameBoard = ["1","2","3","4","5","6","7","8","9"]

    const getAvailableSpaces = () => {
        spaces = [];
        gameBoard.forEach(function(element, index){
            if (isAvailablePosition(index)) {
                spaces.push(index);
            };
        });
        return spaces;
    };
    const addTurn = (position, playerWeapon) => {
        if (isAvailablePosition(position)) {
            gameBoard[position] = playerWeapon;
        }
    }

    const victoryWeapon = () => {
        combos = victoryCombinations();
        combo = combos[0]
        if (combos.length > 0) {
            return gameBoard[combo[0]];
        } else {
            return false;
        }
    }

    const WIN_CONDITIONS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const isAvailablePosition = (position) => {
        return gameBoard[position] !== "X" && gameBoard[position] !== "O";
    }

    const isGameOver = () => {
        return (isVictory() || isTie());
    }

    const isVictory = () => {
        combos = victoryCombinations();
        if (combos === false) {
            return false;
        } else {
            return true;
        }
    }

    const isTie = () => {
        availableSpaces = getAvailableSpaces();
        return ((isVictory() === false) && availableSpaces.length < 1 );
    }

    const victoryCombinations = () => {
        combos = []
          WIN_CONDITIONS.forEach(function (cond) {
              if (gameBoard[cond[0]] === gameBoard[cond[1]] && gameBoard[cond[1]] === gameBoard[cond[2]]) {
                  if (gameBoard[cond[0]] === "X" || gameBoard[cond[0]] === "O") {
                    combos.push(cond);
                  }
              }
              
          });
        return combos.length > 0 ? combos : false;
    };


    return ({gameBoard, getAvailableSpaces, addTurn, isGameOver, victoryWeapon})
}