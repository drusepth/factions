DEPENDENCIES = [
  "game/map",
  "game/pieces"
]

requirejs(DEPENDENCIES, function(util) {
  var turn = true;
  map.cell("each").on("click", function() {
    if (map.cell(this).get() === null) {
      if (turn) { map.cell(this).place(PIECES['soldier'].clone()); }
      else      { map.cell(this).place(PIECES['wizard'].clone()); }
      turn = !turn;
    } else {
      map.cell(this).style({
        background: "gold",
      });
    }
  });
});
