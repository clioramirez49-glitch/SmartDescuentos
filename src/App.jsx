import "./App.css";
import { useState, useEffect } from "react";
import productos from "./data/productos";
import Buscador from "./components/Buscador";
import ListaCompras from "./components/ListaCompras";
import TarjetaProducto from "./components/TarjetaProducto";
import Presupuesto from "./components/Presupuesto";
import Navbar from "./components/Navbar";
import Resumen from "./components/Resumen";
import FiltroCategoria from "./components/FiltroCategoria";
import OrdenarProductos from "./components/OrdenarProductos";
function App() {
  const [busqueda, setBusqueda] = useState("");
 const [resultados, setResultados] = useState([]);
  const [mejorOpcion, setMejorOpcion] = useState(null);
 const [listaCompras, setListaCompras] = useState(() => {
 const listaGuardada = localStorage.getItem("listaCompras");

  return listaGuardada ? JSON.parse(listaGuardada) : [];
});
const [categoria, setCategoria] = useState("Todas");
 const [orden, setOrden] = useState("ninguno");
 const [presupuesto, setPresupuesto] = useState(() => {
  const guardado = localStorage.getItem("presupuesto");
  return guardado ? Number(guardado) : 0;
});

useEffect(() => {
  console.log("Guardando presupuesto:", presupuesto);
  localStorage.setItem("presupuesto", presupuesto);
}, [presupuesto]);
useEffect(() => {
  localStorage.setItem(
    "listaCompras",
    JSON.stringify(listaCompras)
  );
}, [listaCompras]);
  const buscarProducto = () => {
    if (busqueda.trim() === "") {
      setResultados([]);
      setMejorOpcion(null);
      return;
    }

 const encontrados = productos.filter((producto) => {
  const coincideNombre = producto.nombre
    .toLowerCase()
    .includes(busqueda.toLowerCase());

  const coincideCategoria =
    categoria === "Todas" ||
    producto.categoria === categoria;

  return coincideNombre && coincideCategoria;
});
if (orden === "menor") {
  encontrados.sort((a, b) => a.precio - b.precio);
}

if (orden === "mayor") {
  encontrados.sort((a, b) => b.precio - a.precio);
}

if (orden === "nombre") {
  encontrados.sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );
}
    setResultados(encontrados);

    if (encontrados.length > 0) {
      const mejor = encontrados.reduce((barato, actual) =>
        actual.precio < barato.precio ? actual : barato
      );

      const masCaro = encontrados.reduce((caro, actual) =>
        actual.precio > caro.precio ? actual : caro
      );

      setMejorOpcion({
        ...mejor,
        ahorro: masCaro.precio - mejor.precio,
      });
    } else {
      setMejorOpcion(null);
    }
  };

useEffect(() => {
  buscarProducto();
}, [busqueda, categoria, orden]);
 const agregarALista = (producto) => {
  const existe = listaCompras.some(
    (item) =>
      item.nombre === producto.nombre &&
      item.tienda === producto.tienda
  );

  if (existe) {
    alert("⚠️ Este producto ya está en tu lista.");
    return;
  }

  setListaCompras((listaAnterior) => [...listaAnterior, producto]);
}; 
const eliminarDeLista = (indexEliminar) => {
  const nuevaLista = listaCompras.filter(
    (_, index) => index !== indexEliminar
  );

  setListaCompras(nuevaLista);
};
  const total = listaCompras.reduce(
    (suma, producto) => suma + producto.precio,
    0
  );

  return (
    <div className="contenedor">
      <Navbar cantidad={listaCompras.length} />

      <h1>💙 SmartDescuentos</h1>

      <p className="subtitulo">
        Ahorra más. Compra mejor.
      </p>

      <Presupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        total={total}
      />

      <Resumen
        listaCompras={listaCompras}
        total={total}
        presupuesto={presupuesto}
        mejorOpcion={mejorOpcion}
      />

      <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        buscarProducto={buscarProducto}
      />
<FiltroCategoria
  categoria={categoria}
  setCategoria={setCategoria}
/>
<OrdenarProductos
  orden={orden}
  setOrden={setOrden}
/>
      <div className="productos">
        <h2>Resultados</h2>

        {resultados.length === 0 ? (
          <p>No hay resultados.</p>
        ) : (
          resultados.map((producto, index) => (
            <TarjetaProducto
              key={index}
              producto={producto}
              agregarALista={agregarALista}
            />
          ))
        )}
      </div>

      {mejorOpcion && (
        <div
          style={{
            marginTop: "30px",
            background: "#E8F5E9",
            padding: "20px",
            borderRadius: "12px",
            border: "2px solid #4CAF50",
          }}
        >
          <h2>🤖 Recomendación Inteligente</h2>

          <p>Analicé todas las tiendas y encontré la mejor opción.</p>

          <p>
            🏪 <strong>{mejorOpcion.tienda}</strong>
          </p>

          <p>
            💲 Precio: <strong>${mejorOpcion.precio}</strong>
          </p>

          <p>
            🎉 Ahorras{" "}
            <strong>${mejorOpcion.ahorro}</strong> respecto a la opción más cara.
          </p>
        </div>
      )}

      <hr />

  <ListaCompras
  listaCompras={listaCompras}
  eliminarDeLista={eliminarDeLista}
/>
    </div>
  );
}

export default App;