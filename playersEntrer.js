

let playerOneName = "";
let playerTwoName = "";




// ----------------entrer of players----------------




function myPlayer() {

  playerOneName = document.getElementById('p1').value;
  playerTwoName = document.getElementById('p2').value;


  //  validation
  validation(playerOneName, playerTwoName)
  console.log(playerOneName, playerTwoName);
  document.getElementById('rigister').style.display = 'none';



}

// -------------------validation---------------



function validation(input1, input2) {

  if (!input1.trim() || !input2.trim()) return alert("Please enter a valid names");
}