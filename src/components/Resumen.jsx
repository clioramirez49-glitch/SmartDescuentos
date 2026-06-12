function Resumen({
  listaCompras,
  total,
  presupuesto,
  mejorOpcion,
}) {
  const restante = presupuesto - total;

  return (
    <div
      style={{
        background: "#F5F9FF",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "30px",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
      }}
    >
      <h2>📊 Resumen</h2>

      <p>🛒 Productos: <strong>{listaCompras.length}</strong></p>

      <p>💰 Total: <strong>${total}</strong></p>

      <p>
        💵 Restante:
        <strong> ${restante}</strong>
      </p>

      {mejorOpcion && (
        <p>
          🏆 Mejor tienda:
          <strong> {mejorOpcion.tienda}</strong>
        </p>
      )}
    </div>
  );
}

export default Resumen;