import React, { useState } from 'react';
import ChessLogic from './chess.jsx';

async function fetchIDs(userID, yearValue, monthValue, gameID) {
  let api_id_URL = `https://api.chess.com/pub/player/${userID}/games/${yearValue}/${monthValue}`
  try {
    // Fetch JSON output from api
    const response = await fetch(api_id_URL);
    const data = await response.json();
    const url = `https://www.chess.com/game/live/${gameID}`
    // Find game with same url
    for (const games of data.games) {
      if (games.url === url) {
        console.log(games.pgn)
        return games.pgn
      }
    }
    return JSON.stringify(data, null, 2)
  } catch (error) {
    // Display when error occurs
    console.log("Error fetching data:", error);
    return 'Error data';
  }
}
  
function GameID() {
  const [userID, setUserID] = useState("")
  const [monthValue, setMonthValue] = useState("")
  const [yearValue, setYearValue] = useState("")
  const [gameID, setGameID] = useState("")
  const [fetchedData, setFetchedData] = useState()
  
  // Get input value on click
  const click = async () => {
    const data = await fetchIDs(userID, yearValue, monthValue, gameID)
    setFetchedData(typeof data === 'string' ? data : data.pgn);
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
  
    
  /* Display clickable button */
  return (
    <div className="App">
  
      <label htmlFor="userID">User ID</label>
      <input id="userID" onChange={changeUserID} value={userID} />
  
      <label htmlFor="gameID">Game ID</label>
      <input id="gameID" onChange={changeGameID} value={gameID} />
  
      <label htmlFor="year">Year</label>
      <input id="year" onChange={changeYear} value={yearValue} />
  
      <label htmlFor="month">Month</label>
      <input id="month" onChange={changeMonth} value={monthValue} />
  
      <button onClick={click}>Get Input Value</button>

      {/* Rendering fetched data */}
      <ChessLogic fetchedData={fetchedData} />;

    </div>
  ) 
}
  
export default GameID