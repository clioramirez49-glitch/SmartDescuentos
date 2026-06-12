function TarjetaProducto({ producto, agregarALista }) {
  return (
    <div
      className="producto"
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
        textAlign: "center",
        transition: "transform 0.2s ease",
        border: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          fontSize: "60px",
          marginBottom: "10px",
        }}
      >
        {producto.imagen}
      </div>

      <h3
        style={{
          marginBottom: "8px",
          color: "#1f2937",
        }}
      >
        {producto.nombre}
      </h3>

      <div
        style={{
          display: "inline-block",
          background: "#E3F2FD",
          color: "#1565C0",
          padding: "5px 12px",
          borderRadius: "20px",
          fontSize: "14px",
          marginBottom: "12px",
          fontWeight: "bold",
        }}
      >
        🏷️ {producto.categoria}
      </div>

      <p style={{ margin: "8px 0" }}>
        🏪 <strong>{producto.tienda}</strong>
      </p>

      <h2
        style={{
          color: "#2E7D32",
          fontSize: "32px",
          margin: "15px 0",
        }}
      >
        ${producto.precio}
      </h2>

      <div
        style={{
          background: "#E8F5E9",
          color: "#2E7D32",
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "18px",
          fontWeight: "bold",
        }}
      >
        ✅ Disponible
      </div>

      <button
        onClick={() => agregarALista(producto)}
        style={{
          width: "100%",
          padding: "12px",
          background: "#1976D2",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        🛒 Agregar a mi lista
      </button>
    </div>
  );
}

export default TarjetaProducto;