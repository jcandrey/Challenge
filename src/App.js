import React, { useState } from "react";
import Table from "./component/Table";
import InputForm from "./component/InputForm";
import api from "./services/api";

function App() {
  const resuapi = {
    datatoshow: [],
    rowstot: 0,
    rowsperpage: 0,
    sort: [],
  };

  const [res, setRes] = useState(resuapi);

  // Filtro
  //q={"$and": [{"id": {"$regex" :"datos.id"}},{"comercio": {"$regex" :"datos.comercio"}}, {"cuit": {"$regex" :"datos.cuit"}}, {"activo": {"$regex" :"datos.activo"}}]}

  const enviarDatos = async (datos) => {
    const $and = [];
    //Armo un arreglo para el filtro solamente con los parametros ingresador por el usuario
    if (datos.comercio !== "")
      $and.push({ comercio: { $regex: datos.comercio } });
    if (datos.cuit !== "") $and.push({ cuit: { $regex: datos.cuit } });
    if (datos.id !== "") $and.push({ id: { $regex: datos.id } });
    if (datos.activo !== "") $and.push({ activo: { $regex: datos.activo } });

    // Produccion
    const respuesta = await api.get(
      $and.length !== 0 ? `/?q=${JSON.stringify({ $and })}` : `/`
    );
    setRes(respuesta.data);
  };

  return (
    <div>
      <InputForm enviarDatos={enviarDatos} />
      <br />
      <Table res={res} />
    </div>
  );
}

export default App;
