import React from "react";
import { useState } from "react";
import "./App.css";

const SYMBOLS = { 1: "X", 2: "O" };

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(0));
  const [chance, setChance] = useState(0);

  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(board) {
    for (let line of winLines) {
      const [a, b, c] = line;
      if (board[a] !== 0 && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return 0;
  }

  function resetGame() {
    setBoard(Array(9).fill(0));
    setChance(0);
  }

  function handleClick(i) {
    if (board[i] !== 0) return;

    const arr = [...board];
    arr[i] = chance % 2 === 0 ? 1 : 2;
    setBoard(arr);

    const winner = checkWinner(arr);
    if (winner !== 0) {
      setTimeout(() => {
        alert(`Player ${SYMBOLS[winner]} wins!`);
        resetGame();
      }, 50);
      return;
    }

    if (arr.every((cell) => cell !== 0)) {
      setTimeout(() => {
        alert("It's a draw!");
        resetGame();
      }, 50);
      return;
    }

    setChance((prev) => prev + 1);
  }

  const currentPlayer = SYMBOLS[chance % 2 === 0 ? 1 : 2];

  return (
    <div className="game">
      <h1 className="game-title">Tic Tac Toe</h1>
      <p className="turn-indicator">
        Turn: <strong>{currentPlayer}</strong>
      </p>
      <div className="board">
        {board.map((cell, i) => (
          <button
            key={i}
            className={`cell ${cell === 1 ? "cell-x" : cell === 2 ? "cell-o" : ""}`}
            onClick={() => handleClick(i)}
          >
            {SYMBOLS[cell] ?? ""}
          </button>
        ))}
      </div>
      <button className="reset-btn" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default App;
