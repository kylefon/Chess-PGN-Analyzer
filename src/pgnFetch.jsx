import React, { useState } from 'react';
import ChessLogic from './chess';
import { parse } from '@mliebelt/pgn-parser';

function ForPGN() {
  const [pgn, setPGN] = useState("")

  const click = () => {
    try {
      const parsedGame  = parse(pgn)
      console.log(parsedGame);
    } catch (error) {
      console.log("error", error)
    }
  }

  const inputPGN = event => {
    setPGN(event.target.value)
  }

  return(
    <div className='pgnContainer'>
      <label htmlFor="pgnValue">PGN</label>
      <textarea id="pgnValue" onChange = {inputPGN} value = {pgn} />
      <button onClick = {click}>Get Input Value</button>
      <ChessLogic pgn={pgn}/>
    </div>
  )
}

export default ForPGN