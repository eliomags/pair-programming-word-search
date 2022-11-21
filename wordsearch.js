const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // checking if word exists in reverse order of the strings
  // saving reveresed letters array (otherswise letters elements stay reverse and creates issues further down) for the reverse horizontal application and right to left diagonal
  const reverseArray = horizontalJoin.map((ls2) => ls2.split("").reverse());

  //reverse strings
  const reverseArrayJoin = reverseArray.map((ls3) => ls3.join(""));

  for (l of reverseArrayJoin) {
    if (l.includes(word)) return true;
  }

  //building vertical strings and checking if word exists vertically
  const vertical = [];
  for (let col = 0; col < letters[0].length; col++) {
    let line = [];
    for (let row = 0; row < letters.length; row++) {
      line.push(letters[row][col]);
    }
    vertical.push(line);
  }
  const verticalJoin = vertical.map((ls) => ls.join(""));
  for (let x of verticalJoin) {
    if (x.includes(word)) return true;
  }

  // checking if word exists diagonally (for the diagonal that starts at letters[0][0] - left to right).

  let dArray = "";
  for (let i = 0; i < letters.length; i++) {
    if (letters[i][i]) {
      dArray += letters[i][i];
    }
  }
  if (dArray.includes(word)) {
    return true;
  }

  // checking if word exists diagonally (for the diagonal that starts at letters[0][letters[0].length] - right to left).
  let dArray2 = "";
  for (let i = 0; i < reverseArray.length; i++) {
    if (reverseArray[i][i]) {
      dArray2 += reverseArray[i][i];
    }
  }
  if (dArray2.includes(word)) {
    return true;
  }
  return false;
};

module.exports = wordSearch;
