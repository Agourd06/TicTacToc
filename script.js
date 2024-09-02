let SquireNum = 20;
let Towinlength = 5;
let SquiresBoard = document.getElementById('SquiresBoard');
let squires = Array(SquireNum * SquireNum).fill('');
let PlayerTurn = 'X'
let gameBegin = false;
let wininningCombos = [];

function generateWinningCombos(boardSize, comboLength) {
    const combos = [];

    // Horizo combo
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col <= boardSize - comboLength; col++) {
            const combo = [];
            for (let i = 0; i < comboLength; i++) {
                combo.push(row * boardSize + col + i);
            }
            combos.push(combo);
        }
    }

    // Vertical combo
    for (let col = 0; col < boardSize; col++) {
        for (let row = 0; row <= boardSize - comboLength; row++) {
            const combo = [];
            for (let i = 0; i < comboLength; i++) {
                combo.push((row + i) * boardSize + col);
            }
            combos.push(combo);
        }
    }

    // Diagonal combo
    for (let row = 0; row <= boardSize - comboLength; row++) {
        for (let col = 0; col <= boardSize - comboLength; col++) {
            const combo = [];
            for (let i = 0; i < comboLength; i++) {
                combo.push((row + i) * boardSize + col + i);
            }
            combos.push(combo);
        }
    }

    // Diagonal combinat
    for (let row = 0; row <= boardSize - comboLength; row++) {
        for (let col = comboLength - 1; col < boardSize; col++) {
            const combo = [];
            for (let i = 0; i < comboLength; i++) {
                combo.push((row + i) * boardSize + col - i);
            }
            combos.push(combo);
        }
    }
    console.log(combos);
    
    return combos;
}


function addSymbol(index) {
    if (!gameBegin) {
        document.getElementById("messages").style.display = 'flex';
        return document.getElementById("notStarted").style.display = 'flex';
    }
    if (squires[index] === '') {
        squires[index] = PlayerTurn;

        if (PlayerTurn === 'X') {
            document.getElementsByClassName("Carre")[index].style.color = '#01016f';
        } else {
            document.getElementsByClassName("Carre")[index].style.color = '#d8031c';
        }

        document.getElementsByClassName("Carre")[index].textContent = PlayerTurn;

        winned();

        // its a draw
        if (isDraw()) {

            document.getElementById("messages").style.display = 'flex';
            document.getElementById("drawMessage").style.display = 'flex';
            gameBegin = false; 

        } else if (gameBegin) {

            PlayerTurn = PlayerTurn === 'X' ? 'O' : 'X';
        }
    }
}


function isDraw() {
    for (let i = 0; i < squires.length; i++) {
        if (squires[i] === '') {
            return false;
        }
    }
    return true;
}


function playerScore(winner) {

    let winScore = JSON.parse(localStorage.getItem('playerScore')) || {};

    const winnerName = winner === 'X' ? playerOneName : playerTwoName;



    if (!winScore[winnerName]) {
        winScore[winnerName] = {
            wins: 0
        };
    }
    winScore[winnerName].wins += 1;
    localStorage.setItem('playerScore', JSON.stringify(winScore));
}

function winned() {

    for (let combo of wininningCombos) {
        if (combo.every(index => squires[index] === PlayerTurn)) {
            playerScore(PlayerTurn)
            document.getElementById("win").innerHTML = PlayerTurn + "'s" + " " + "Win";
            document.getElementById("messages").style.display = 'flex';
            document.getElementById("win").style.display = 'flex';
            gameBegin = false
            PlayerTurn = 'X';
            newGame()

            PlayerTurn = PlayerTurn === 'X' ? 'O' : 'X';

        }
    }
}

function restartGame() {
    if (playerTwoName !== "" && playerOneName !== "") {
        squires.fill('');
        buildSquires()

        gameBegin = true;

        PlayerTurn = 'X';
    }
}

function newGame() {
    const squares = document.querySelectorAll('.Carre');

    squares.forEach(function (square) {
        square.textContent = '';
    });
    PlayerTurn = 'X'

    squires = Array(SquireNum * SquireNum).fill('');

    document.getElementById('rigister').style.display = 'flex';
    gameBegin = true
}

function ShowDetails() {

    let score = JSON.parse(localStorage.getItem('playerScore')) || {};
    console.log(score);
    document.getElementById('detailBg').style.display = 'flex';


    Object.entries(score).forEach(([name, item]) => {

        const detailDiv = document.createElement("div");
        detailDiv.className = 'myWins';
        detailDiv.textContent = `NAME : ${name}, WINS : ${item.wins}`;


        document.getElementById("deatilsPart").appendChild(detailDiv);
    });



}

function removeDetails() {
    document.getElementById('detailBg').style.display = 'none';
    document.getElementById('deatilsPart').innerHTML = '';
}

function removeMessages() {
    document.getElementById('messages').style.display = 'none';
}

// Bug : need to fix the restart game logique
function buildSquires() {
    SquiresBoard.innerHTML = ``
    for (let i = 0; i < SquireNum * SquireNum; i++) {
        var div = document.createElement("div");
        div.className = 'Carre';

        div.addEventListener('click', () => addSymbol(i))
        SquiresBoard.appendChild(div);

    }

}

buildSquires();