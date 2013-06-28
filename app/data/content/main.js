// Global variables
var letter_list = "AAAAAAAAAAAAABBBCCCDDDDDDEEEEFEEEEEEEEEEEEEFFFGGGGHHHIIIIIIIIIIIIJJKKLLLLLMMMNNNNNNNNOOOOOOOOOOOPPPQQRRRRRRRRRSSSSSSTTTTTTTTTUUUUUUVVVWWWXXYYYZZ";


/**
 * Draws the initial board and sets up the game.
 */
function draw() {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');

  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  for (var i = 0; i < 20; i++) {
    drawTile();
  }
}


/**
 * Draws an individual tile, given the tile number.
 * todo: tile placement should be random (near the top for single player)
 *       tiles should be facedown until they are peeled
 * @param {number} letter The letter index to be drawn by this function.
 */
function drawTile() {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');

  // get a random letter still in the list
  var index = Math.floor(Math.random()*letter_list.length);
  var character = letter_list[index];

  // get a random spot near the top to place it
  var x = getRandomInt(1, canvas.width);
  var y = getRandomInt(1, canvas.height * 0.20);

  // draw the rectangle
  ctx.fillStyle = '#3498db';
  ctx.strokeStyle = "#2980b9";
  ctx.fillRect(x, y, 50, 50);

  // draw the letter on the rectangle
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'white';
  ctx.font = '300 16px \'Droid Sans\'';
  ctx.fillText(character, x + 25, y + 25);

  // remove the letter from the list (it has now been peeled)
  letter_list.slice(0, index) + letter_list.slice(index + 1, letter_list.length)
}




