import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import "../styles/styleTable.css";

createTheme("propio", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#002b36",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

const Table = ({ res }) => {
  const tabla = res && res.datatoshow;

  const columnas = [
    {
      name: "ID",
      selector: "id",
      grow: 1,
    },
    {
      name: "Comercio",
      selector: "comercio",
      sortable: true,
    },
    {
      name: "CUIT",
      selector: "cuit",
    },
    {
      name: "Concepto 1",
      selector: "concepto1",
    },
    {
      name: "Concepto 2",
      selector: "concepto2",
    },
    {
      name: "Concepto 3",
      selector: "concepto3",
    },
    {
      name: "Concepto 4",
      selector: "concepto4",
    },
    {
      name: "Concepto 5",
      selector: "concepto5",
    },
    {
      name: "Concepto 6",
      selector: "concepto6",
    },
    {
      name: "Balance",
      selector: "balance",
    },
    {
      name: "Activo",
      selector: "activo",
    },
    {
      name: "Ultima Venta",
      selector: "ultvent",
    },
  ];

  const setPage = {
    rowsPerPageText: "Comercios por pagina:",
    rangeSeparatorText: "de",
    selectAllRowsItem: "true",
    selectAllRowsItemText: "Todos",
  };

  return (
    <div>
      <DataTable
        theme="propio"
        columns={columnas}
        data={tabla}
        title="Listado de Comercios"
        striped={true}
        highlightOnHover={true}
        pagination
        //paginationServer={true}
        paginationDefaultPage={1}
        paginationComponentOptions={setPage}
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  );
};

export default Table;
