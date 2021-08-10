import React from 'react'
import Tile from './Tile'

function Board() {
    // function createBoard(){
    //     for( let i = 0; i < 9; i++){

    //     }
    // }



    return (
        <div className="board">
            <Tile onClick={handleClick} />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>
    )
}

export default Board
