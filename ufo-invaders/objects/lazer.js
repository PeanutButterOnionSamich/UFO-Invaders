export function getLazer(canvas, game) {
    return {
        type: "rectangle",
        x: game.defender.x, y: game.defender.y, width: 4, height: 4, speedY:2, color: '#fc0000',
        maxLeft: 0, maxRight: canvas.width - 40
    };

}