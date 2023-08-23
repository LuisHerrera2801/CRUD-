import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [services,setServices]=useState([])

    useEffect(()=>{
      loadServices();
    },[]);

    const loadServices=async()=>{
        const result=await axios.get("http://localhost:8081/services")
        setServices(result.data);
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">No Registro</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categoria</th>
      <th scope="col">Descripción</th>
      <th scope="col">Ubicación</th>
      <th scope="col">Editar</th>
    </tr>
  </thead>
  <tbody>

    {
      services.map((service,index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{service.name}</td>
      <td>{service.category}</td>
      <td>{service.description}</td>
      <td>{service.location}</td>
    </tr>
      ))
    }
    
    <tr>
      
    </tr>
  </tbody>
</table>

        </div>
    </div>
  )
}
