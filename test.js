var should = require('chai').should()

describe('Chỉ giới hạn hai người chơi', function () {
    it('Số người chơi được lưu trong game là 2', function () {
        var players = getPlayers();
        players.should.have.lengthOf(2);
    });
});

describe('Chức năng chọn người đi trước', function () {
    it('Nếu không chọn thì người đi trước là Player 1', function () {
        var first = getFirstPlayer();
        first.should.equal('Player 1');
    });

    it('Nếu người chơi chọn Player 2 thì chương trình lưu người đi trước là Player 2', function () {
        choicePlayer(2);
        var first = getFirstPlayer();
        first.should.equal('Player 2');
    });
});

describe('Người đi trước thực hiện nước đi', function () {
    it('Không được đi vào ô đã chọn', function () {
        var player = 1, i = 5, j = 6;
        var turn1 = tick(i, j, player);
        turn1.should.equal(true);
        var turn2 = tick(i, j, player);
        turn1.should.equal(false);
    });

    it('Nước đi của người chơi được lưu lại', function () {
        var player = 1, i = 5, j = 6;
        tick(i, j, player);
        var result = getResult(player);
        result.should.equal([[i, j]]);
    });

    it('Người chơi hiện tại chuyển thành người chơi còn lại', function () {
        var first = 1, i = 5, j = 6;
        tick(i, j, first);
        var player = getCurrentPlayer();
        player.should.equal('Player 2');
    });
});


describe('Ván chơi kết thúc khi có 5 ô sát nhau được đánh dấu giống nhau', function () {
    it('Ván đấu kết thúc 5 ô liên tiếp theo hàng ngang', function () {
        var player1 = 1, i1 = 1, player2 = 2, i2 = 2;
        for(var j= 1; j < 6; j++) {
            tick(j, i, player);
            tick(j, i2, player2);
        }

        var result = getGameResult();
        result.not.equal(false);
    });

    it('Ván đấu kết thúc 5 ô liên tiếp theo hàng chéo', function () {
        var player1 = 1, i = 1, j=1, player2 = 2;
        while(j < 6) {
            tick(i, j, player1);
            tick(i+1, j+1, player2);
            i++;
            j++;
        }

        var result = getGameResult();
        result.not.equal(false);
    });

    it('Ván đấu kết thúc 5 ô liên tiếp theo hàng dọc', function () {
        var player1 = 1, j1 = 1, player2 = 2, j2 = 2;
        for(var i= 1; i < 6; i++) {
            tick(j1, i, player);
            tick(j2, i, player2);
        }

        var result = getGameResult();
        result.not.equal(false);
    });
});

