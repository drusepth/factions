function Hand (maxHandSize) {
  this.boundElementId = 'hand';
  this.maxHandSize = maxHandSize;

  this.slots = jsboard.board({
    attach: this.boundElementId,
    size:   "1x" + this.maxHandSize
  });

  this.slots.cell("each").on("click", function() {
    var my_hand = GAME.my_hand;

    if (my_hand.visual().cell(this).get() !== null) {
      my_hand.resetSelection();
      my_hand.selectPiece(this);
    }
  });
}

Hand.prototype.resetSelection = function () {
  this.visual().cell("each").style({
    background: 'lightgrey'
  });
  //...........todo.....this.visual().cell("each").DOM().classList.remove('selected');
};

Hand.prototype.selectPiece = function (piece) {
  this.visual().cell(piece).style({
    background: "gold",
  });
  this.visual().cell(piece).DOM().classList.add('selected');
};

Hand.prototype.selectedPiece = function () {
  for (var i = 0; i < this.maxHandSize; i++) {
    if (this.visual().cell([0, i]).DOM().classList.contains('selected')) {
      return i;
    }
  }
  return null;
};

Hand.prototype.actualHandSize = function () {
  for (var i = 0; i < this.maxHandSize; i++) {
    if (this.visual().cell([0, i]).get() === null) {
      return i;
    }
  }
  return this.maxHandSize;
};

Hand.prototype.draw = function () {
  // TODO: implement player decks
  var possibleDraws = Object.keys(PIECES);
  var randomRoll    = possibleDraws[possibleDraws.length * Math.random() << 0];
  var drawOutcome   = PIECES[randomRoll];

  var piecesInHand = this.actualHandSize();
  if (piecesInHand < this.maxHandSize) {
    this.putPieceInHand(drawOutcome);
  } else {
    // TODO: discard card from deck (draw burn)
  }
};

Hand.prototype.putPieceInHand = function (piece) {
  var piecesInHand = this.actualHandSize();
  this.visual().cell([0, piecesInHand]).place(piece.clone());
}

Hand.prototype.visual = function () {
  return this.slots;
}
