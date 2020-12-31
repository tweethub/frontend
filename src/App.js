import React, { Component } from 'react'
import './App.css'

import {Chart} from "./Chart";

class App extends Component {
    render () {
        return (
            <div className="App">
                <div className="container">
                    <Chart/>
                </div>
            </div>
        )
    }
}
export default App