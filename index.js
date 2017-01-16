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
    const map = {
      '-1': 'O',
      0: ' ',
      1: 'X',
    };

    let result = '|';

    row.forEach((spot) => {
      result += ` ${map[spot]} |`;
    });

    result += '\n';

    return result;
  }
}
