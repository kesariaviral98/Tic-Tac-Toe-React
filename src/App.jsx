import React from "react";
import { useState } from "react";

const App = () => {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
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

  function handleClick(i) {
    if (board[i] !== 0) return;

    let arr = [...board];
    arr[i] = chance % 2 === 0 ? 1 : 2;
    setBoard(arr);

    const winner = checkWinner(arr);
    if (winner !== 0) {
      alert(`Player ${winner} wins!`);
      setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setChance(0);
      return;
    }

    setChance((prev) => prev + 1);
  }

  return (
    <div className="grid grid-cols-3 gap-2 w-50">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <button
          key={i}
          className="h-16 w-16 border text-2xl flex items-center justify-center"
          onClick={() => handleClick(i)}
        >
          {board[i]}
        </button>
      ))}
    </div>
  );
};

export default App;

