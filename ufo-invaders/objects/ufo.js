
export function getufos(canvas, startx, starty) {

    var ufos = new Array(5);
    for (var i = 0; i < ufos.length; i++) {
        ufos[i] = getufo(canvas, startx, starty);
    }

    return ufos;
}
function getufo(canvas, startx, starty) {

    return {
        type: "rectangle",
        x: startx, y: starty, width: 20, height: 5, speedX: 5, speedY: 5, color: '#211a1a',
        maxLeft: 0, maxRight: canvas.width - 20, maxTop: 0,
        maxDown: canvas.height - 220, timer: Date.now() + 1000
    };
}
export function updateUfos(game) {

    removeHitUfos(game);

    for (var i = 0; i < game.ufos.length; i++) {
        var ufo = game.ufos[i];
        var xbuffer = 11
        var ybuffer = 12

        if (Date.now() > ufo.timer) {
            randomize(ufo);
        }

        ufo.x = ufo.x + ufo.speedX;
        if (ufo.x > ufo.maxRight - xbuffer || ufo.x < ufo.maxLeft + xbuffer) {
            ufo.speedX = ufo.speedX * -1;
        }

        ufo.y = ufo.y + ufo.speedY;
        if (ufo.y > ufo.maxDown - ybuffer || ufo.y < ufo.maxTop + ybuffer) {
            ufo.speedY = ufo.speedY * -1;
        }
    }
}

function removeHitUfos(game) {
    var ufos = game.ufos;
    var liveUfos = [];
    var missiles = game.missiles;
    var liveMissiles = []; 

    for (var i = 0; i < ufos.length; i++) {
        for (var j = 0; j < missiles.length; j++) {
            console.log("i=" + i + " j=" + j);
        }  
    }


}
function randomize(ufo) {
    ufo.speedX = (Math.floor(Math.random() * 90) - 45) / 10;
    ufo.speedY = (Math.floor(Math.random() * 90) - 45) / 10;
    ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
}