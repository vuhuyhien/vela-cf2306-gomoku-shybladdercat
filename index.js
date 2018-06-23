function getPlayers() {
    return window.playerCount;
}

function getFirstPlayer() {
    return window.firstPlayer;
}

function choicePlayer(player) {
    window.firstPlayer = player;
}

function createBoard() {
    if (!window.board) {
        window.board = [];
    }
    for (i = 0; i < 100; i++) {
        if (!window.board[i]) {
            window.board[i] = [];
        }
        for (j = 0; j < 100; j++) {
            window.board[i][j] = 0;
        }
    }
}

function tick(j, i, player) {
    if (player === 1) {
        window.board[i][j] = "x";
    } else {
        window.board[i][j] = "o";
    }
}

function getResult(player) {
    if (player === 1) {
        return window.player1;
    } else {
        return window.player2;
    }
}

function getCurrentPlayer() {
    return window.currentPlayer;
}

function getGameResult() {
    var result = {}
    result[0] = getGameResult1();
    result[1] = getGameResult2();
    result[2] = getGameResult3();
    result[3] = getGameResult4();

    for(let i in result) {
        if(result[i] === 'end') {
            return getCurrentPlayer();
        }
    }

    return false;
}

function getGameResult1(x, y){
    var count = 0;
    for (i = 0; i < 5 ;i ++) {
        if(window.board[x][y] != 0 && window.board[x][y] == window.board[x-1][y-1]) {
           count++; 
        } else {
            break;
        }
    }

    for (i = 0; i < 5 ;i ++) {
        if(window.board[x][y] != 0 && window.board[x][y] == window.board[x+1][y+1]) {
           count++; 
        } else {
            break;
        }
    }

    if(count === 5) {
        return 'end';
    }

    return false;
}

function getGameResult2(x, y){
    var count = 0;
    for (i = 0; i < 5 ;i ++) {
        if(window.board[x][y] != 0 && window.board[x][y] == window.board[x-1][y+1]) {
           count++; 
        } else {
            break;
        }
    }

    for (i = 0; i < 5 ;i ++) {
        if(window.board[x][y] != 0 && window.board[x][y] == window.board[x+1][y-1]) {
           count++; 
        } else {
            break;
        }
    }

    if(count === 5) {
        return 'end';
    }

    return false;
}

function getGameResult3(x, y){
    var count = 0;
    for (i = 0; i < 5 ;i ++) {
        if(window.board[x][y] != 0 && window.board[x][y] == window.board[x][y-1]) {
           count++; 
        } else {
            break;
        }
    }

    for (i = 0; i < 5 ;i ++) {
        if(window.board[x][y] != 0 && window.board[x][y] == window.board[x][y+1]) {
           count++; 
        } else {
            break;
        }
    }

    if(count === 5) {
        return 'end';
    }

    return false;
}

function getGameResult4(x, y){
    var count = 0;
    for (i = 0; i < 5 ;i ++) {
        if(window.board[x][y] != 0 && window.board[x][y] == window.board[x-1][y]) {
           count++; 
        } else {
            break;
        }
    }

    for (i = 0; i < 5 ;i ++) {
        if(window.board[x][y] != 0 && window.board[x][y] == window.board[x+1][y]) {
           count++; 
        } else {
            break;
        }
    }

    if(count === 5) {
        return 'end';
    }

    return false;
}