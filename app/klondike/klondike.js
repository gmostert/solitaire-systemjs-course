import angular from 'angular';

import {KlondikeGame} from 'klondike/game.js';
import 'klondike/board.js';
import {Scoring} from 'klondike/scoring.js';

angular.module("klondike.scoring", [])
    .service("scoring", [Scoring]);

angular.module("klondike.game", [])
    .service("klondikeGame", ["scoring", KlondikeGame]);

angular.module("klondike", [
  "klondike.game",
  "klondike.board",
  "klondike.scoring"
]);
