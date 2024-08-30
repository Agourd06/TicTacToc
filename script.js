let SquireNum = 400;
let Towinlength = 5;
let SquiresBoard = document.getElementById('SquiresBoard');
let squires = Array(SquireNum).fill('');
let PlayerTurn = 'X'
let gameBegin;
let wininningCombos = [
    //horizontal combin
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],

    // Vertical combin
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],

    // Diagonal combi
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
]

function addSymbol(index) {
    if (squires[index] == '') {
        squires[index] = PlayerTurn;
        document.getElementsByClassName("Carre")[index].textContent = PlayerTurn;
        winned();



        PlayerTurn = PlayerTurn === 'X' ? 'O' : 'X';
    }



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
            alert('you win');

        }
    }
}



function buildSquires() {

    for (let i = 0; i < SquireNum; i++) {
        var div = document.createElement("div");
        div.className = 'Carre';
        div.addEventListener('click', () => addSymbol(i))
        SquiresBoard.appendChild(div);

    }

}

buildSquires();