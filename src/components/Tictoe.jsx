import React, { useState } from "react";
import "./Tictoe.css";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Tictoe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    let newBoard = [...board];

    newBoard[index] = player;
    setBoard(newBoard);

    let newPlayer = player === "X" ? "O" : "X";
    setPlayer(newPlayer);

    checkForWinner(newBoard);
  };

  const checkForWinner = (currentBoard) => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
     
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        return;
      }
    }

    if (!currentBoard.includes(null)) {
      setWinner("DRAW");
      return;
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {winner ? (
        <div className="message">
          {winner === "DRAW" ? "It's a draw!" : `Player ${winner} wins!`}
          <button onClick={handleReset}>Reset Game</button>
        </div>
      ) : (
        <div className="board">
          {board.map((cell, index) => (
            <div
              key={index}
              className="cell"
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
