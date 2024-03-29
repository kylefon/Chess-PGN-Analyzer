import { parse } from '@mliebelt/pgn-parser';

function ForPGN({ setPgn }) {

  const click = () => {
    try {
      const parsedGame  = parse(pgn)
      console.log(parsedGame);
    } catch (error) {
      console.log("error", error)
    }
  }

  const inputPGN = event => {
    setPgn(event.target.value)
  }

  return(
    <div className='pgnContainer'>
      <label htmlFor="pgnValue">PGN</label>
      <textarea id="pgnValue" onChange = {inputPGN}/>
      <button onClick = {click}>Get Input Value</button>
    </div>
  )
}

export default ForPGN