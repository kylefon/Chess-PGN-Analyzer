import React, { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import ChessParse from './parse';

export default function ChessLogic({ fetchedData, pgn }) {
  const moveNotation = ChessParse({ fetchedData, pgn })
  const [game] = useState(new Chess());
  const [moveIndex, setMoveIndex] = useState(-1);


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
    game.reset()
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
    <>
      <div className="chessContainer">
        <div className='chessBoard'>
          <Chessboard className="basicBoard" position={game.fen()} arePiecesDraggable={false} />
        </div>
      </div>
      <div className='buttonContainer'>
        <button onClick={resetMoves}>Restart</button>
        <button onClick={nextMove}>Next Move</button>
        <button onClick={undoMove}>Undo Move</button>
        <button onClick={fastForward}>Fast Forward</button>
      </div>
    </>
  )
}
