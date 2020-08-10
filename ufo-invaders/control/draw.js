export function drawGame(game) {
    drawObjects(game);
}

function drawObjects(game) {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    drawObject(game.ctx, game.earth);
    drawObject(game.ctx, game.sky);
    drawufos(game.ctx, game.ufos);
    drawObject(game.ctx, game.defender);
    drawMissiles(game.ctx, game.missiles); 
}

function drawufos(ctx, ufos) {
    for (var i = 0; i < ufos.length; i++) {
        var ufo = ufos[i];
        drawObject(ctx, ufo);
    }
}
function drawMissiles(ctx, missiles) {
    for (var i = 0; i < missiles.length; i++) {
        var missile = missiles[i];
        drawObject(ctx, missile);
    }
}


function drawObject(ctx, object) {
    ctx.beginPath();
    ctx.rect(object.x, object.y, object.width, object.height);
    ctx.fillStyle = object.color;
    ctx.fill();
    ctx.closePath();
}
