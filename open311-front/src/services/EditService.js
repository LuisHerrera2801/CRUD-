import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditService() {
    let navigate = useNavigate();

    const{id}=useParams()
  
    const [service, setService] = useState({
      name: "",
      category: "",
      description: "",
      location:"",
    });
  
    const { name, category, description, location } = service;
  
  
    const onInputChange = (e) => {
      setService({ ...service, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        loadServices();
    }, []);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8081/service/${id}`, service);
      navigate("/");
    };

    const loadServices =async ()=>{
        const result=await axios.get(`http://localhost:8081/service/${id}`)
        setService(result.data)
    }
  
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
            <h2 className="text-center m-4">Editar el servicio que deseas</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre 
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Nombre del servicio"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Categoria 
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Escribe la categoria del servicio"
                  name="category"
                  value={category}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripcion
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="danos una descripcion breve del servicio"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Ubicacion
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="En donde requieres el servicio"
                  name="location"
                  value={location}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Enviar solicitud
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancelar
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }