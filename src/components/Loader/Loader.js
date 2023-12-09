import React, { useContext } from 'react'
import ReactLoading from 'react-loading';
import "./Loader.css"
import { ApiContext } from '../../context/ApiContext';
function Loader() {
    const { switcher } = useContext(ApiContext)
    return (
        switcher ?
            <div className='loader'>
                <ReactLoading type={"spokes"} color={"blue"} height={667} width={375} />
            </div> : <></>
    )
}

export default Loader