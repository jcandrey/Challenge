import a from "axios";
import { tabla } from "../datosprueba/datos.json";

const axios = a.create({
  baseURL: "https://api.koibanx.com/stores",
  adapter:
    process.env.NODE_ENV === "production"
      ? undefined
      : (config) => {
          console.log(
            "configuracion:",
            config.method,
            config.baseURL + config.url
          );
          const page = 0;
          const rowsperpage = tabla.length;
          const query = Object.fromEntries(
            config.url
              .slice(2)
              .split("&")
              .map((q) => q.split("="))
          );

          console.log("query", query);
          let filtrado = tabla;

          if (query.q) {
            const q = JSON.parse(query.q);
            let comercio = q.$and.find((elem) => !!elem.comercio);
            let id = q.$and.find((elem) => !!elem.id);
            let cuit = q.$and.find((elem) => !!elem.cuit);
            let activo = q.$and.find((elem) => !!elem.activo);

            if (comercio) {
              comercio = comercio.comercio.$regex;
              filtrado = filtrado.filter((fila) =>
                fila.comercio.toLowerCase().includes(comercio.toLowerCase())
              );
            }
            if (id) {
              id = id.id.$regex;
              filtrado = filtrado.filter((fila) => fila.id === id);
            }
            if (cuit) {
              cuit = cuit.cuit.$regex;
              filtrado = filtrado.filter((fila) => fila.cuit.includes(cuit));
            }
            if (activo) {
              activo = activo.activo.$regex;
              filtrado = filtrado.filter((fila) =>
                fila.activo.includes(activo)
              );
            }
          }
          const res = {
            rowstot: filtrado.length,
            rowsperpage,
            sort: [],
            datatoshow: filtrado.slice(
              page * rowsperpage,
              (page + 1) * rowsperpage
            ),
          };
          return Promise.resolve({ data: res });
        },
});

export default axios;
