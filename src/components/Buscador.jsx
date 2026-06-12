function Buscador({ busqueda, setBusqueda }) {
  return (
    <div style={{ marginBottom: "25px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="🔍 Escribe el nombre de un producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          width: "320px",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default Buscador;