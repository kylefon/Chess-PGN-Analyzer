import React from 'react'
import ReactDOM from 'react-dom/client'
import GameID from './fetch.jsx'
import ForPGN from './pgnFetch.jsx'
import Board from './board.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameID />
    <ForPGN /> 
    <Board />
  </React.StrictMode>,
)
