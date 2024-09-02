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
    document.getElementById("messages").style.display = 'flex';
    document.getElementById("ValidationMessage").style.display = 'flex';  
      return false; 
  }

  return true; 
}