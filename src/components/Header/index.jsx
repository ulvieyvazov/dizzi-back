import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div style={{width: '10%', margin: '0 auto'}}>
            <ul style={{display: 'flex', gap: '10px'}}>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/admin"}>Add</NavLink></li>
            </ul>
        </div>
    )
}

export default Header