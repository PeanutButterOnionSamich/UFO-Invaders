import { getGame } from './control/game.js';
import { drawGame } from './control/draw.js';
import { updateGame } from './control/update.js';
import { keyDown, keyUp } from './control/events.js';


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    keyDown(game, e);
}

function keyUpHandler(e) {
    keyUp(game, e);
}

var game = getGame();

function draw() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    if (game.gameOver) {
        clearInterval(refreshInterval);
    } else {
        updateGame(game);
        drawGame(game)
    }

}

var refreshInterval = setInterval(draw, 10);