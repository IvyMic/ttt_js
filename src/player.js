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


    return ({gameBoard, getAvailableSpaces, addTurn})
}