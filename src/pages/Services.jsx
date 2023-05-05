import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Services = () => {

    const [services, setServices] = useState([
        { id: 1, serviceName: 'Service 1'},
        { id: 2, serviceName: 'Service 2'},
        { id: 3, serviceName: 'Service 3'},
    ])

  return (
    <>
        <div>Services</div>
        <ul className='list-group'>
            {
                services.map((service) => {
                    return (
                        <li className='list-group-item d-flex justify-content-between' key={service.id}>
                            <span>{service.serviceName}</span>
                            <Link to={`/services/${service.id}`}>Ver</Link>
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default Services