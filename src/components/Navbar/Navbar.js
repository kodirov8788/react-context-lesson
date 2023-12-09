import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ApiContext } from '../../context/ApiContext'
function Navbar() {
    const { setSwitcher } = useContext(ApiContext)
    return (
        <div className='navbar'>
            <h1>Navbar</h1>
            <Link to={"/contact"}>Contact</Link>

            <button onClick={() => setSwitcher(true)}>Yoqish</button>
            <button onClick={() => setSwitcher(false)}>O'chirish</button>

        </div>
    )
}

export default Navbar