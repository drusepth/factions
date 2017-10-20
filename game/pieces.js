var PIECES = {};

requirejs(['game/models/piece'], function(util) {
  PIECES['x'] = jsboard.piece({
    text: "X",
    fontSize: "40px",
    textAlign: "center"
  });
  PIECES['o'] = jsboard.piece({
    text: "O",
    fontSize: "40px",
    textAlign: "center"
  });
});
