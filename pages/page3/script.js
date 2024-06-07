document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('colorButton');
  button.addEventListener('click', function() {
    changeColor();
  });
});

function changeColor() {
  var textElement = document.getElementById('text');
  var randomColor = getRandomColor();
  textElement.style.color = randomColor;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}