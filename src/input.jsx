function GameID({ setFetchedData, setPgn }) {
    const [userID, setUserID] = useState("")
    const [monthValue, setMonthValue] = useState("")
    const [yearValue, setYearValue] = useState("")
    const [gameID, setGameID] = useState("")
    
    // Get input value on click
    const click = async () => {
      const data = await fetchIDs(userID, yearValue, monthValue, gameID)
      setFetchedData(typeof data === 'string' ? data : data.pgn)
    }
    
    const changeUserID = event => {
      setUserID(event.target.value)
    }
    
    const changeMonth = event => {
      setMonthValue(event.target.value)
    }
    
    const changeYear = event => {
      setYearValue(event.target.value)
    }
    
    const changeGameID = event => {
      setGameID(event.target.value)
    }
  
    const inputPGN = event => {
      setPgn(event.target.value)
    }  
      
    /* Display clickable button */
    return (
      <div className="AppContainer">
        <h1>PGN Viewer</h1>
        <div className="inputsValueContainer">
            <div className="labelInput">
                <label htmlFor="userID">User ID</label>
                <input id="userID" onChange={changeUserID} value={userID} />
            </div>
            <div className="labelInput">
                <label htmlFor="gameID">Game ID</label>
                <input id="gameID" onChange={changeGameID} value={gameID} />
            </div>
            <div className="labelInput">
                <label htmlFor="year">Year</label>
                <input id="year" onChange={changeYear} value={yearValue} />
            </div>
            <div className="labelInput">
                <label htmlFor="month">Month</label>
                <input id="month" onChange={changeMonth} value={monthValue} />
            </div> 
            <div className='textArea'>
                <p>PGN</p>
                <textarea id="pgnValue" onChange = {inputPGN}/>
            </div>
        </div>
        <div className='getInputButton'>
          <button onClick={click}>Get Input Value</button>
        </div>
      </div>
    ) 
  }
    
  export default GameID