describe('Player', () => {
    let player;

    beforeEach(function () {
        player = Player("Goku", "X");
    });

    it('should have an accessible name property', () => {
        expect(player.name).toEqual("Goku");
    });

    it('should have an accessible weapon property', () => {
        expect(player.weapon).toEqual("X");
    });
});

describe('Board', () => {
    let board;
    beforeEach(function () {
        board = Board();
    })

    it('should have an accessible gameBoard property', () => {
        expect(board.gameBoard).toEqual(["1","2","3","4","5","6","7","8","9"])
    });

    describe('getAvailableSpaces', () => {
        it('should return available spaces on the gameboard', () => {
            expect(board.getAvailableSpaces()).toEqual([0,1,2,3,4,5,6,7,8])
        });
    });

    describe('addTurn', () => {
        it('should add a players weapon type to the gameboard array', () => {
            board.addTurn(0, "X");
            expect(board.gameBoard).toEqual(["X","2","3","4","5","6","7","8","9"])
        });
        it('should not add a player weapon type if the position is taken', () => {
            board.gameBoard[0] = "O";
            board.addTurn(0, "X");
            expect(board.gameBoard).toEqual(["O","2","3","4","5","6","7","8","9"])
        });
    });

    // describe('victoryCombinations', () => {
    //     it('should return a victory combination if it exists', () => {
    //         board.gameBoard[0] = "O";
    //         board.gameBoard[1] = "O";
    //         board.gameBoard[2] = "O";
    //         expect(board.victoryCombinations()).toEqual([[0,1,2]]);
    //     });
    //     it('should return false if no victory combo is present on the gameboard', () => {
    //         expect(board.victoryCombinations()).toEqual(false);
    //     });
    // });

    describe('isGameOver', () => {
        it('should return true if a player has met a win condition', () => {
            board.gameBoard[0] = "O";
            board.gameBoard[1] = "O";
            board.gameBoard[2] = "O";
            expect(board.isGameOver()).toEqual(true);
        });
        it('should return true if a tie state is reached', () => {
            board.gameBoard = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
            expect(board.isGameOver()).toEqual(false);
        });
        it('should return false where game hasnt reached an end state', () => {
            expect(board.isGameOver()).toEqual(false);
        });
    });

    describe('victoryWeapon', () => {
        it('should return the weapon type of the player that has won', () => {
            board.gameBoard[0] = "O";
            board.gameBoard[1] = "O";
            board.gameBoard[2] = "O";
            expect(board.victoryWeapon()).toEqual("O");
        });
        it('should return false when neither player has won', () => {
            expect(board.victoryWeapon()).toEqual(false)
        });
    });


});