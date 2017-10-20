// Map
var map = jsboard.board({
  attach: "game",
  size: "12x12"
});










// Pieces
var x = jsboard.piece({
  text: "X",
  fontSize: "40px",
  textAlign: "center"
});
var o = jsboard.piece({
  text: "O",
  fontSize: "40px",
  textAlign: "center"
});












// Logic

var turn = true;
map.cell("each").on("click", function() {
  if (map.cell(this).get() === null) {
    if (turn) { map.cell(this).place(x.clone()); }
    else      { map.cell(this).place(o.clone()); }
    turn = !turn;
  } else {
    map.cell(this).style({
      background: "gold",
    });
  }
});
