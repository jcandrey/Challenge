import React, { useState } from "react";
import "../styles/styleForm.css";

const InputForm = ({ enviarDatos }) => {
  const [datos, setDatos] = useState({
    id: "",
    comercio: "",
    cuit: "",
    activo: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    enviarDatos(datos);
  };

  return (
    <section className="form-search">
      <h5>Datos para la búsqueda</h5>
      <form onSubmit={onSubmit}>
        <label>
          Comercio:
          <input
            className="controls"
            type="text"
            name="comercio"
            placeholder="Nombre del Comercio"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ID:
          <input
            className="controls"
            type="text"
            name="id"
            placeholder="Coloque el ID"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CUIT:
          <input
            className="controls"
            type="text"
            name="cuit"
            placeholder="CUIT sin guiones"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Activo:
          <select
            className="caja"
            name="activo"
            id="activo"
            onChange={handleChange}
          >
            <option value="">Indistinto</option>
            <option value="1">Si</option>
            <option value="0">No</option>
          </select>
        </label>
        <br />
        <button className="boton" type="submit">
          Buscar
        </button>
      </form>
    </section>
  );
};

export default InputForm;
