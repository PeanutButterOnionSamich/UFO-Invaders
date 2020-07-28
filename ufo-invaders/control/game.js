import { getEarth } from '../objects/earth.js';
import { getSky } from '../objects/sky.js';
import { getufos } from '../objects/ufo.js';
import { getDefender } from '../objects/defender.js';
import { getLazer } from '../objects/lazer.js';

export function getGame() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var infoCenter = document.getElementById("infoCenter");
    var infoCtx = infoCenter.getContext("2d");
    var earth = getEarth(canvas);
    var sky = getSky(canvas);
    var ufos = getufos(canvas,100,100);
    var defender = getDefender(canvas);
    var events = {leftPressed: false, rightPressed: false, spacePressed:false};
    var lazer = getLazer()
    var game = {
        gameOver: false,
        infoCenter: infoCenter, infoCtx: infoCtx,
        canvas: canvas, ctx: ctx,
        earth: earth, sky: sky, ufos: ufos, defender: defender,
        events: events,
        lazer: lazer
    };
    return game;
}