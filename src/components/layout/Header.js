import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

function Header() {
    return (
        <header className='header'>
            <h1>Todo List</h1>
            <Link className='headerLink' to='/'>Home</Link> | 
            <Link className='headerLink' to='/about'> About</Link>
        </header>
    )
}


export default Header;