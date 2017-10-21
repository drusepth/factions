GAME = {};
CURRENT_PLAYER = null;

requirejs(['game/schema/hand', 'game/schema/game'], function (util) {
  CURRENT_PLAYER = 'player1';

  GAME = new Game();
});
