import React from 'react'
import '../CSS/Header.css'

function Header({ title }) {
    return (
        <div className="header">
            {title}
        </div>
    )
}

export default Header
