import React, { useState } from 'react';

function ForPGN() {
    const [pgn, setPGN] = useState("")

    const click = () => {
      alert(pgn)
    }

    const inputPGN = event => {
      setPGN(event.target.value)
    }
    return(
      <div className='pgnContainer'>
        <label htmlFor="pgnValue">PGN</label>
        <textarea id="pgnValue" onChange = {inputPGN} value = {pgn} />
        <button onClick = {click}>Get Input Value</button>
      </div>
    )
}

export default ForPGN