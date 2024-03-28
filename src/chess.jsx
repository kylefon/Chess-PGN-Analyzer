
import React, { useState } from 'react';
import { Chess } from 'chess.js';
import { parse } from '@mliebelt/pgn-parser';
import { Chessboard } from 'react-chessboard';
  
  // let game, gameMove 
  // try {
  //   game = parse(fetchedData)
  //   console.log(game)
  //   gameMove = game[0].moves[0].notation.notation
  //   console.log(gameMove)
  // } catch (error) {
  //   console.log('Error Parsing PGN: ', error);
  // }

  // export default function ChessLogic({ fetchedData }) {
  //   const [game] = useState(new Chess());
  //   const [fen, setFen] = useState('start');
  
  //   const handleMove = (targetSquare) => {
  //     const possibleMoves = game.move({ verbose: true });
  //     const move = possibleMoves.find((m) => m.to === targetSquare);
  
  //     if (!move) return;
  
  //     const sourceSquare = move.from;
  //     game.move({ from: sourceSquare, to: targetSquare });
  
  //     setFen(game.fen());
  //   };
  
  //   if (fetchedData) {
  //     try {
  //       const gameData = parse(fetchedData);
  //       if (gameData && gameData.length > 0) {
  //         const moves = gameData[0].moves.map((move) => move.notation.notation);
  //         moves.forEach((move) => handleMove(move));
  //         console.log(moves)
  //       }
  //     } catch (error) {
  //       console.log('Error Parsing PGN:', error);
  //     }
  //   }
  
  //   return (
  //     <div>
  //       <Chessboard
  //         position={fen}
  //         onSquareClick={(square) => handleMove(square)}
  //       />
  //     </div>
  //   );
  // }

  
export default function ChessLogic({ fetchedData }) {
  const [moveIndex, setMoveIndex] = useState(0);
  const [currentMove, setCurrentMove] = useState('');
  let moveNotation

  try{
    const parsedPgn = parse(fetchedData);
    moveNotation = parsedPgn[0].moves;
  } catch(error) {
    console.log("error", error)
  }

  const nextMove = () => {
    if (moveIndex < moveNotation.length - 1) {
      setMoveIndex(prevIndex => prevIndex + 1);
      setCurrentMove(moveNotation[moveIndex + 1].notation.notation);
    } else {
      console.log("No more available moves");
      
    }
  }
  
  const undoMove = () => {
    if (moveIndex > 0) {
      setMoveIndex(prevIndex => prevIndex - 1);
      // Access the updated value of moveIndex
      setCurrentMove(moveNotation[moveIndex - 1].notation.notation);
      // Access the updated value of currentMove
    } else {
      console.log("No more available moves");
      setMoveIndex(-1);
      setCurrentMove('');
    }
  }
  

  const resetMoves = () => {
    setMoveIndex(-1);
    setCurrentMove('');
    console.log("Reset");
  }
 
  
  
  return (
    <div>
      <button onClick={resetMoves}>Restart</button>
      <button onClick={nextMove}>Next Move</button>
      <button onClick={undoMove}>Undo Move</button>
      <button>Fast Forward</button>
      <p>{currentMove}</p>
      <p>{moveIndex}</p>
    </div>
  )
}


