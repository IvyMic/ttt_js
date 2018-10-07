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

});