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
}
