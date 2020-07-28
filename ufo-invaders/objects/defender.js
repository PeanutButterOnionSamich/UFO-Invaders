export function getDefender(canvas) {

    return {
        type: "rectangle",
        x: 0, y: canvas.height - 110, width: 40, height: 10, speedX: 3, color: '#2b334f',
        maxLeft: 0, maxRight: canvas.width - 40
    };
}
export function updateDefender(game) {
    var defender=game.defender;
    if (game.events.rightPressed) {
        defender.x = defender.x + game.defender.speedX;
    }
    if (game.events.leftPressed) {
        defender.x = defender.x - game.defender.speedX;
    }

}
