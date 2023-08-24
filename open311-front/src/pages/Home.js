import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [services,setServices]=useState([]);

    const { id } = useParams();

    useEffect(()=>{
      loadServices();
    },[]);

    const loadServices=async()=>{
        const result=await axios.get("http://localhost:8081/services")
        setServices(result.data);
    };
    const deleteServices = async (id) => {
      await axios.delete(`http://localhost:8081/service/${id}`);
      loadServices();
    };

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
      <td>
        <button className='btn btn-primary mx-2'>Ver</button>
        <Link className='btn btn-outline-primary mx-2'
        to={`/editservice/${service.id}`}>
          Editar
        </Link>
        <button className='btn btn-danger mx-2'
          onClick={()=>deleteServices(service.id)}
          
          >Eliminar</button>
      </td>
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
