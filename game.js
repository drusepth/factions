DEPENDENCIES = [
  'game/map',
  'game/pieces',
  'game/hand'
]

requirejs(DEPENDENCIES, function (util) {
  var my_turn = true; // TODO: come back to this when we do networking logic




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
