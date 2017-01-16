#!/usr/bin/env node --harmony
/* eslint no-plusplus: ['error', { 'allowForLoopAfterthoughts': true }]*/
/* eslint no-console: 0 */
const readline = require('readline');
const readInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TicTacToe {
  constructor() {
    this.board = [];
    for (let i = 0; i < 3; i++) {
      this.board.push([]);
      for (let j = 0; j < 3; j++) {
        this.board[i].push(0);
      }
    }

    this.map = {
      '-1': 'O',
      o: -1,
      0: ' ',
      1: 'X',
      x: 1,
    };
  }

  display() {
    let result = '';

    this.board.forEach((row) => {
      result += this.displayDivider();
      result += this.displayRow(row);
    });

    result += this.displayDivider();

    return result;
  }

  displayDivider() {
    let result = '';

    for (let i = 0; i < (this.board[0].length * 4) + 1; i++) {
      result += '-';
    }
    result += '\n';

    return result;
  }

  displayRow(row) {
    let result = '|';

    row.forEach((spot) => {
      result += ` ${this.map[spot]} |`;
    });

    result += '\n';

    return result;
  }

  setSpot(x, y, type) {
    this.board[y - 1][x - 1] = this.map[type];
  }

  checkWinner() {
    // Can use reduce for all of these but did the quicker way
    let sum = 0;

    for (let i = 0; i < this.board.length; i++) { // Check each row
      sum = 0;
      for (let j = 0; j < this.board[i].length; j++) {
        sum += this.board[i][j];
      }
      if (sum === 3) {
        return 'X is a winner';
      }
      if (sum === -3) {
        return 'O is a winner';
      }
    }

    sum = 0;
    for (let i = 0; i < this.board.length; i++) { // Check each column
      sum += this.board[i][0];
    }
    if (sum === 3) {
      return 'X is a winner';
    }
    if (sum === -3) {
      return 'O is a winner';
    }

    sum = 0;
    for (let i = 0; i < this.board.length; i++) { // Top Left to bottom right diagnol
      sum += this.board[i][i];
    }
    if (sum === 3) {
      return 'X is a winner';
    }
    if (sum === -3) {
      return 'O is a winner';
    }

    sum = 0;
    for (let i = 0; i < this.board.length; i++) { // Top Right to bottom left diagnol
      sum += this.board[i][this.board.length - (i + 1)];
    }
    if (sum === 3) {
      return 'X is a winner';
    }
    if (sum === -3) {
      return 'O is a winner';
    }

    return false;
  }
}

module.exports = TicTacToe;

const game = new TicTacToe();

const done = () => {
  console.log('Bye');
  console.log(game.checkWinner());
  console.log(game.display());
  readInput.close();
  process.exit();
};

for (let i = 0; i < 10; i++) {
  if (i === 10) done();

  console.log(game.display());
  if (i % 2 === 0) { // Even so player X can go
    let x;
    let y;

    readInput.question('Player X enter the coordinates you cant to place a piece at X,Y', (input) => {
      [x, y] = input.split(',');
      game.setSpot(x, y, 'x');
      if (game.checkWinner()) {
        done();
      }
    });
  } else { // Odd so player O can go
    let x;
    let y;

    readInput.question('Player Y enter the coordinates you cant to place a piece at X,Y', (input) => {
      [x, y] = input.split(',');
      game.setSpot(x, y, 'Y');
      if (game.checkWinner()) {
        done();
      }
    });
  }
}
