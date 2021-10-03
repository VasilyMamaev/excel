const CODES = {
  A: 65,
  Z: 90,
};

const createCell = (content) => {
  return `
    <div class="cell" contenteditable>${content}</div>
    `;
};

const createCol = (content) => {
  return `
    <div class="column">${content}</div>
    `;
};

const createRow = (content, i) => {
  return `
    <div class="row">
    <div class="row-info">${i ?? ""}</div>
    <div class="row-data">${content}</div>
    </div>
    `;
};

export const createTable = (rowsCount = 15) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const cols = new Array(colsCount)
    .fill("")
    .map((_, i) => String.fromCharCode(CODES.A + i))
    .map(createCol)
    .join("");

  const rows = [];

  rows.push(createRow(cols, null));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill("").map(createCell).join("");

    rows.push(createRow(cells, i + 1));
  }

  return rows.join("");
};
