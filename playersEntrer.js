// -------------------validation---------------

let PlayerOne = document.getElementById('p1');
let PlayerTwo = document.getElementById('p2');

function showError(errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.style.display = "block";

}

function hideError(errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.style.display = 'none';
}

PlayerOne.addEventListener('input', function () {

  document.getElementById('form');
  if (PlayerOne.value == ' ') {
    showError('validmsg1');
  } else {
    hideError('validmsg1')
  }

});

PlayerTwo.addEventListener('input', function () {

  document.getElementById('form');
  if (PlayerTwo.value == ' ') {
    showError('validmsg2');
  } else {
    hideError('validmsg2')
  }

});


