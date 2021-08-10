import React from 'react'
import '../CSS/Body.css'
import Board from './Board'

function Body() {
    return (
        <div className="body">
            <div className="theme">
                <i class="far fa-sun"></i>
                <i class="fas fa-toggle-off"></i>
                {/* <i class="fas fa-toggle-on"></i> */}
                <i class="far fa-moon"></i>
            </div>
            <Board />
        </div>
    )
}

export default Body
