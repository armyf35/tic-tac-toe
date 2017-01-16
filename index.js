#!/usr/bin/env node --harmony
/* eslint no-plusplus: ['error', { 'allowForLoopAfterthoughts': true }]*/
/* eslint no-console: 0 */

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
}
