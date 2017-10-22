function Game () {
  this.map = jsboard.board({
    attach: 'game',
    size: '8x8'
  });
  this.my_turn = true; // TODO: come back to this when we do networking logic
  this.my_hand = new Hand(8);

  this.map.cell("each").on("click", function() {
    var map = GAME.map;
    if (map.cell(this).get() === null) {
      // Placing a piece
      var pieceSelectedInHand = GAME.my_hand.selectedPiece();


      if (this.my_turn) { map.cell(this).place(PIECES['soldier'].clone()); }
      else              { map.cell(this).place(PIECES['wizard'].clone()); }
    } else {
      map.cell(this).style({
        background: "gold",
      });
    }
  });
}

Game.prototype.clear = function () {
  this.map.cell("each").rid();
  this.map.cell("each").style({ background: 'lightgrey' });

  this.my_hand.visual().cell("each").rid();
  this.my_hand.visual().cell("each").style({ background: 'lightgrey' });
};

Game.prototype.start = function () {
  this.clear();

  console.log('starting game');
};
