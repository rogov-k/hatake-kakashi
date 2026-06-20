const onLoad = () => {
  const notationInput = document.getElementById('notation-input');
  notationInput.addEventListener('input', (e) => {
    const notation = e.target.value.trim();
    void renderBoard(notation);
  });
  const notation = notationInput.value.trim();
  void renderBoard(notation);
};

const renderBoard = async (trimmedNotation) => {
  const notation = document.body.querySelector('#notation');
  const tableElement = renderTable(trimmedNotation);
  // const res = await fetch('/chess', {method: 'POST', body: value});

  notation.innerHTML = '';
  notation.appendChild(tableElement);
};

const renderTable = (notation) => {
  const table = document.createElement('div');
  table.classList.add('board');

  let index = 0;

  for (const row of notation.split('/')) {
    for (const ch of row) {
      const isEmpty = /\d/.test(ch);

      if (isEmpty) {
        const empty = Number(ch);
        for (let i = 0; i < empty; i++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.classList.add((index + Math.floor(index / 8)) % 2 === 0 ? 'light-square' : 'dark-square');
          table.appendChild(cell);
          index++;
        }
        continue;
      }

      // create cell
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add((index + Math.floor(index / 8)) % 2 === 0 ? 'light-square' : 'dark-square');

      // create piece wrapper
      const piece = document.createElement('div');
      piece.classList.add('piece');

      // piece color
      if (/([PRNBQK])/.test(ch)) piece.classList.add('white-piece');
      if (/([prnbqk])/.test(ch)) piece.classList.add('black-piece');

      // piece type
      const lower = ch.toLowerCase();
      const pieceMap = {
        p: 'pawn',
        r: 'rook',
        n: 'knight',
        b: 'bishop',
        q: 'queen',
        k: 'king'
      };
      if (pieceMap[lower]) {
        piece.classList.add(`piece-${pieceMap[lower]}`);
      }

      // append piece into cell
      cell.appendChild(piece);
      table.appendChild(cell);

      index++;
    }
  }

  return table;
};


const getTableCell = (value) => {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.textContent = value;

  return cell;
};
