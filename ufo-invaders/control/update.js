import {updateufos} from '../objects/ufo.js';
import { updateDefender } from '../objects/defender.js';

export function updateGame(game) {
    updateufos(game.ufos);
    updateDefender(game);
}
