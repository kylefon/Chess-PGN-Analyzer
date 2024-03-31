import { useState } from 'react';
import ChessLogic from './chess.jsx'
import GameID from './fetch.jsx';
import ForPGN from './pgnFetch.jsx';

export default function App() {
    const [fetchedData, setFetchedData] = useState('');
    const [pgn, setPgn] = useState('');
  
    return (
        <>
            <div className='inputContainer'>
                <GameID className="gameID" setFetchedData={setFetchedData}/>
                <ForPGN className="forPGN" setPgn={setPgn}/>
            </div>
            <div className='boardContainer'>
                <ChessLogic fetchedData={fetchedData} pgn={pgn} />
            </div>
        </>
    )
  }