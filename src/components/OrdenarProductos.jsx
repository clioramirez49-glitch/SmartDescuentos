function OrdenarProductos({ orden, setOrden }) {
  return (
    <div
      style={{
        margin: "20px 0",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <label>
        <strong>📊 Ordenar por:</strong>
      </label>

      <select
        value={orden}
        onChange={(e) => setOrden(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        <option value="ninguno">Sin ordenar</option>
        <option value="menor">💲 Precio menor</option>
        <option value="mayor">💲 Precio mayor</option>
        <option value="nombre">🔤 Nombre A-Z</option>
      </select>
    </div>
  );
}

export default OrdenarProductos;