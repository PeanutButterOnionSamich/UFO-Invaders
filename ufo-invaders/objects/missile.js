export function getMissiles() {
    var missiles = [];
    return missiles;
}

export function getMissile(defender) {
    return {
        type: "rectangle",
        x: (defender.x + defender.width / 2) - 3, y: defender.y, width: 8, height: 5, speedY: 7, color: '#294294',
        maxTop: 0,
    };
}

export function updateMissiles(game) {
    var shot = false;
    if (game.events.spacePressed) {

        if (shot == false) {
            var missile = getMissile(game.defender);
            console.log("before add a missle to the array")
            console.log(game.missiles.length);
            game.missiles.push(missile);
            console.log("After add a missle to the array")
            console.log(game.missiles.length);
            shot = true
        }


    }

    for (var i = 0; i < game.missiles.length; i++) {
        var missile = game.missiles[i];
        missile.y = missile.y - missile.speedY;

    }
}
