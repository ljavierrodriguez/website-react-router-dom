import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
            </li>
        </ul>
    )
}

export default Menu