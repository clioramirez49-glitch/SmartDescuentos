function FiltroCategoria({ categoria, setCategoria }) {
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
        <strong>📂 Categoría:</strong>
      </label>

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        <option value="Todas">Todas</option>
        <option value="Lácteos">Lácteos</option>
        <option value="Abarrotes">Abarrotes</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Limpieza">Limpieza</option>
        <option value="Verduras">🥦 Verduras</option>
        <option value="Carnes">🥩 Carnes</option>
        <option value="Despensa">🍚 Despensa</option>
        <option value="Higiene">🧴 Higiene</option>
        <option value="Limpieza">🧼 Limpieza</option>
      </select>
    </div>
  );
}

export default FiltroCategoria;