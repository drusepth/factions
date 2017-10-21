function Piece(slug, representationText) {
  this.slug = slug;
  this.representationText = representationText;

  this.template = jsboard.piece({
    text: this.representationText,
    fontSize: '40px',
    textAlign: 'center'
  });
}

Piece.prototype.clone = function () {
  return this.template.clone();
};

Piece.prototype.valid_moves = function (map, coordinate) {
  console.log('moves tbd');
};
