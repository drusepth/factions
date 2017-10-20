var HAND = {};
requirejs(['game/models/hand'], function (util) {
  HAND[CURRENT_PLAYER] = new Hand(8);
});
