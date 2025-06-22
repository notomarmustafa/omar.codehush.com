import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Fun = () => {
  const navigate = useNavigate();
  const [accessGranted, setAccessGranted] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const winner = calculateWinner(squares);

  useEffect(() => {
    const access = sessionStorage.getItem('fun_access_granted');

    if (access !== 'true') {
      navigate('/'); // 🚪 Block direct access
    } else {
      setAccessGranted(true);

      // ⏱️ Auto-redirect after 30 seconds
      const timeout = setTimeout(() => {
        sessionStorage.removeItem('fun_access_granted');
        navigate('/');
      }, 30000);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [navigate]);

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = squares.slice();
    newSquares[i] = xTurn ? 'X' : 'O';
    setSquares(newSquares);
    setXTurn(!xTurn);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXTurn(true);
  };

  if (!accessGranted) return null;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-5 md:px-20 py-20 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-10">🎯 Tic Tac Toe</h1>

      <div className="grid grid-cols-3 gap-3">
        {squares.map((val, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-24 h-24 text-3xl font-bold border border-white rounded hover:bg-white hover:text-black transition-all"
          >
            {val}
          </button>
        ))}
      </div>

        <div className="mt-6 text-xl flex flex-col items-center gap-4">
            {winner ? (
                <p>🎉 Winner: {winner}</p>
            ) : (
                <p>Next Turn: {xTurn ? 'X' : 'O'}</p>
            )}
            <div className="flex gap-4">
                <button
                    onClick={resetGame}
                    className="cursor-pointer px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition"
                >
                    Reset Game
                </button>
                <button
                    onClick={() => {
                        sessionStorage.removeItem('fun_access_granted');
                        navigate('/');
                    }}
                    className="cursor-pointer px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition"
                >
                    Home
                </button>
            </div>
        </div>

    </div>
  );
};

export default Fun;
