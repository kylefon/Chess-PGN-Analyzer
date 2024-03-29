import React, { useState } from 'react';
import { Chess } from 'chess.js';
import { parse } from '@mliebelt/pgn-parser';
import { Chessboard } from 'react-chessboard';
    
export default function ChessLogic({ fetchedData }) {
  const [game, setGame] = useState(new Chess());
  const [moveIndex, setMoveIndex] = useState(-1);
  const [moveNotation, setMoveNotation] = useState([]);

  const parsePgn = (data) => {
    try {
      const parsedPgn = parse(data);
      console.log(parsedPgn);
      setMoveNotation(parsedPgn[0].moves);
    } catch (error) {
      console.log("error", error);
    }
  }

  if (fetchedData && moveNotation.length === 0) {
    parsePgn(fetchedData);
  }

  const nextMove = () => {
    if (moveIndex < moveNotation.length - 1) {
      const move = moveNotation[moveIndex + 1];
      game.move(move.notation.notation);
      setMoveIndex(prevIndex => prevIndex + 1);
    } else {
      console.log("No more available moves");
    }
  }

  const undoMove = () => {
    if (moveIndex > -1) {
      game.undo();
      setMoveIndex(prevIndex => prevIndex - 1);
    } else {
      console.log("No more available moves to undo");
    }
  }
  
  const resetMoves = () => {
    setMoveIndex(-1);
    setGame(new Chess())
    console.log("Reset");
  }

  const fastForward = () => {
    const fastForwardStep = (index) => {
      if (index < moveNotation.length - 1) {
        const move = moveNotation[index + 1];
        if (game.move(move.notation.notation)) {
          setMoveIndex(index + 1);
          setTimeout(() => {
            fastForwardStep(index + 1);
          }, 500); 
        } else {
          console.log("Invalid move:", move.notation.notation);
        }
      }
    };
  
    fastForwardStep(moveIndex);
  };
  
  return (
    <div>
      <button onClick={resetMoves}>Restart</button>
      <button onClick={nextMove}>Next Move</button>
      <button onClick={undoMove}>Undo Move</button>
      <button onClick={fastForward}>Fast Forward</button>
      <Chessboard position={game.fen()} />;
    </div>
  )
}


