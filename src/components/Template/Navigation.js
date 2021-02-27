import Hamburger from './Hamburger'
import React from 'react'

const Navigation = () =>(
    <header id="header">
        <h1>Header</h1>
    <nav className='links'>
        <ul>
        <li>first</li>
        <li>Seconds</li>
        </ul>
    </nav>
    <Hamburger/>
    </header>

);

export default Navigation;
