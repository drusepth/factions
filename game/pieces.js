var PIECES = {};

function createPiece(slug, representationText) {
  PIECES[slug] = new Piece(slug, representationText);
}

requirejs(['game/models/piece'], function(util) {
  createPiece('soldier', 'S');
  createPiece('wizard',  'W');
  createPiece('rogue',   'R');
});
