function ListaCompras({ listaCompras, eliminarDeLista }) {
  const total = listaCompras.reduce(
    (suma, producto) => suma + producto.precio,
    0
  );

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>🛒 Mi Lista de Compras</h2>

      {listaCompras.length === 0 ? (
        <p>Aún no has agregado productos.</p>
      ) : (
        <>
          {listaCompras.map((producto, index) => (
            <div
              key={index}
              style={{
                background: "#f5f5f5",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "10px",
              }}
            >
              <div style={{ fontSize: "35px" }}>
                {producto.imagen}
              </div>

              <strong>{producto.nombre}</strong>

              <br />

              🏪 {producto.tienda}

              <br />

              💲{producto.precio}
              <br />
<br />

<button onClick={() => eliminarDeLista(index)}>
  🗑️ Eliminar
</button>
            </div>
          ))}

          <hr />

          <h3>💰 Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default ListaCompras;