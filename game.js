DEPENDENCIES = [
  'game/pieces',
  'game/game'
]

requirejs(DEPENDENCIES, function (util) {
  console.log('loaded');
});
