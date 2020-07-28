
export function getufos(canvas, startx, starty) {

    var ufos = new Array(25);
    for (var i = 0; i < ufos.length; i++) {
        ufos[i] = getufo(canvas, startx, starty);
    }

    return ufos;
}
function getufo(canvas, startx, starty) {

    return {
        type: "rectangle",
        x: startx, y: starty, width: 30, height: 10, speedX: 5, speedY: 5, color: '#3b3737',
        maxLeft: 0, maxRight: canvas.width - 20, maxTop: 0,
        maxDown: canvas.height - 220, timer: Date.now() + 1000
    };
}
export function updateufos(ufos) {


    for (var i = 0; i < ufos.length; i++) {
        var ufo = ufos[i];
        var xbuffer = 8
        var ybuffer = 10

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

function randomize(ufo) {
    ufo.speedX = (Math.floor(Math.random() * 90) - 45) / 10;
    ufo.speedY = (Math.floor(Math.random() * 90) - 45) / 10;
    ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
}
