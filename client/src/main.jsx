import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BallotTaskProvider } from './context/BallotTaskContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BallotTaskProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BallotTaskProvider>,
 // document.getElementById('root')
)
