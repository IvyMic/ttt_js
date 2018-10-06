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
});