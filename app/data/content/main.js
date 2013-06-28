// Global variables
var letter_list = "AAAAAAAAAAAAABBBCCCDDDDDDEEEEFEEEEEEEEEEEEEFFFGGGGHHHIIIIII\
                   IIIIIIJJKKLLLLLMMMNNNNNNNNOOOOOOOOOOOPPPQQRRRRRRRRRSSSSSSTT\
                   TTTTTTTUUUUUUVVVWWWXXYYYZZ"


/**
 * Draws the initial board and sets up the game. Accepts no parameters.
 */
function draw() {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');

  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  for (var i = 0; i <= letter_list.length; i++) {
    drawTile(i);
  }
};


/**
 * Draws an individual tile, given the tile number.
 * todo: tile placement should be random (near the top for single player)
 *       tiles should be facedown until they are peeled
 * @param {number} letter The letter index to be drawn by this function.
*/
function drawTile(letter) {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');

  var character = letter_list[letter];

  var tile_color = '#ebc080';

  ctx.fillStyle = tile_color;
  ctx.strokeStyle = "#000";
  roundRect(ctx, (100 * letter) + 10, 10, 50, 50, 5, true);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'black';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText(character, ((200 * letter) + 70) / 2, 10 + 50 / 2);
}


/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} radius The corner radius. Defaults to 5;
 * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
 * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
 */
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }
}



