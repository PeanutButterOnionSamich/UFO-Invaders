import {updateUfos} from '../objects/ufo.js';
import { updateDefender } from '../objects/defender.js';
import { updateMissiles } from '../objects/missile.js';

export function updateGame(game) {
    updateUfos(game);
    updateDefender(game);
    updateMissiles(game);
}
