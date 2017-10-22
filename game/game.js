GAME = {};

requirejs(['game/schema/hand', 'game/schema/game'], function (util) {
  GAME = new Game();
});
