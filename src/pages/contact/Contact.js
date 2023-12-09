import React, { useContext } from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'
import { ApiContext } from '../../context/ApiContext'
function Contact() {
    const { setSwitcher } = useContext(ApiContext)

    return (
        <div>
            <h1>Contact</h1>
            <Link to={"/"}>Home</Link>
            <button onClick={() => setSwitcher(true)}>Yoqish</button>
            <button onClick={() => setSwitcher(false)}>O'chirish</button>
        </div>
    )
}

export default Contact