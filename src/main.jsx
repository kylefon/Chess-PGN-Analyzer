import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ChessLogic from './chess.jsx';
import GameID from './fetch.jsx';
import './index.css';

function App() {
    const [fetchedData, setFetchedData] = useState('');
    const [pgn, setPgn] = useState('');
  
    return (
        <>
            <div className='boardContainer'>
                <ChessLogic fetchedData={fetchedData} pgn={pgn} />
            </div>
            <div className='inputContainer'>
                <GameID className="gameID" setFetchedData={setFetchedData} setPgn={setPgn}/>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
