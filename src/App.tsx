import './App.css'
import Card from './components/Card'
import TurnKeyProviderConfig from './turnkey'
import { BrowserRouter as Router } from 'react-router-dom'
import Views from '@/views'
import React from 'react'


function App() {

    return (
        <TurnKeyProviderConfig>
            <React.Suspense fallback={<h2>Loading....</h2>}>
                <Router>
                    <Views />
                </Router>
            </React.Suspense>
        </TurnKeyProviderConfig>
    )
}

export default App
