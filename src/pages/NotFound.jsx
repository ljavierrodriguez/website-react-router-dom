import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>Page Not Found (404)</div>
            <button className="btn btn-warning btn-sm mx-1" onClick={() => navigate(-1)}>Regresar</button>
            <button className="btn btn-warning btn-sm mx-1" onClick={() => navigate('/')}>Ir a Home</button>
        </>
    )
}

export default NotFound