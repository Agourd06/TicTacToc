let playerOneName = "";
let playerTwoName = "";




// ----------------entrer of players----------------



function myPlayer() {

  playerOneName = document.getElementById('p1').value;
  playerTwoName = document.getElementById('p2').value;



  //  validation
  if (!validation(playerOneName, playerTwoName)) {
    return;
  }
  document.getElementsByClassName('playersName')[0].textContent = playerOneName + ' ' + 'Vs' + ' ' + playerTwoName;

  document.getElementById('rigister').style.display = 'none';


  wininningCombos = generateWinningCombos(SquireNum, Towinlength);
  gameBegin = true

}

// -------------------validation---------------




function validation(input1, input2) {

  if (!input1.trim() || !input2.trim()) {
    alert("Please enter valid names");
    return false; // Return false if validation fails
  }

  return true; // Return true if validation passes
}