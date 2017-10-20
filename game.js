DEPENDENCIES = [
  'game/map',
  'game/pieces',
  'game/hand'
]

GAME = {};
CURRENT_PLAYER = 'player1';

requirejs(DEPENDENCIES, function (util) {
  var my_turn = true; // TODO: come back to this when we do networking logic

  GAME.clear = function () {
    map.cell("each").rid();
    map.cell("each").style({ background: 'lightgrey' });

    HAND[CURRENT_PLAYER].visual().cell("each").rid();
  }

  GAME.start = function () {
    GAME.clear();
    console.log('starting game');
  };

  var turn = true;
  map.cell("each").on("click", function() {
    if (map.cell(this).get() === null) {
      if (my_turn) { map.cell(this).place(PIECES['soldier'].clone()); }
      else         { map.cell(this).place(PIECES['wizard'].clone()); }
    } else {
      map.cell(this).style({
        background: "gold",
      });
    }
  });
});
