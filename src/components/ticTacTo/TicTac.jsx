import React from "react";
import "./tictac.css";
import { useState, useEffect } from "react";

const Square = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

const TicTac = () => {
    const [square, setSquare] = useState(Array(9).fill(""));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState('');

    function getWinner(squares) {
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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    }

    function handleClick(getSquare) {
        let cpySquares = [...square];
        if (getWinner(cpySquares) || cpySquares[getSquare]) {
            return;
        }
        cpySquares[getSquare] = isXNext ? "X" : "O";
        setIsXNext(!isXNext);
        setSquare(cpySquares);
    }

    useEffect(() => {
        if (!getWinner(square) && square.every((item) => item !== '')) {
            setWinner('No one win');
        }
        else
            setWinner(getWinner(square))
    }, [square, isXNext]);

    function resetAll() {
        setSquare(Array(9).fill(""));
        setIsXNext(true);
        setWinner('');
    }
    return (
        <div className="tic-tac-toe">
            <div className="row">
                <Square value={square[0]} onClick={() => handleClick(0)} />
                <Square value={square[1]} onClick={() => handleClick(1)} />
                <Square value={square[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={square[3]} onClick={() => handleClick(3)} />
                <Square value={square[4]} onClick={() => handleClick(4)} />
                <Square value={square[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={square[6]} onClick={() => handleClick(6)} />
                <Square value={square[7]} onClick={() => handleClick(7)} />
                <Square value={square[8]} onClick={() => handleClick(8)} />
            </div>
            <div>{isXNext ? "X is Next" : "O is Next"}</div>
            {
                winner && <div>Winner is: {winner}</div>
            }
            <button onClick={resetAll}>Reset</button>
        </div>
    );
};

export default TicTac;
