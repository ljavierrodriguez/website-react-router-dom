import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DetailService = () => {

    /* const params = useParams();
    console.log(params); */
    const { service_id } = useParams();

    const navigate = useNavigate();


  return (
    <>
    <div>Services {service_id}</div>
    <button className="btn btn-warning btn-sm mx-1" onClick={() => navigate(-1)}>Regresar</button>
    <button className="btn btn-warning btn-sm mx-1" onClick={() => navigate('/')}>Ir a Home</button>
    </>
  )
}

export default DetailService