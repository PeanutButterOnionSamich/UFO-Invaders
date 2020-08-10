export function getDefender(canvas) {

    return {
        type: "rectangle",
        x: 0, y: canvas.height - 110, width: 40, height: 10, speedX: 5, color: '#2b334f',
        maxLeft: 0, maxRight: canvas.width - 40
    };
}
export function updateDefender(game) {
    var defender = game.defender;
    var buffer = 8

    if (game.events.rightPressed && defender.x <= defender.maxRight - buffer) {
        defender.x = defender.x + defender.speedX;
    }
    if (game.events.leftPressed && defender.x >= defender.maxLeft + buffer) {
        defender.x = defender.x -defender.speedX;
    }
}

