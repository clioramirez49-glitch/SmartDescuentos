function Presupuesto({ presupuesto, setPresupuesto, total }) {
  const restante = presupuesto - total;

  const porcentaje =
    presupuesto > 0
      ? Math.min((total / presupuesto) * 100, 100)
      : 0;

  let colorBarra = "#4CAF50";

  if (porcentaje >= 80 && porcentaje < 100) {
    colorBarra = "#FFC107";
  }

  if (porcentaje >= 100) {
    colorBarra = "#F44336";
  }

  return (
    <div
      style={{
        background: "#F3F8FF",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "25px",
      }}
    >
      <h2>💰 Mi Presupuesto</h2>

      <input
        type="number"
        placeholder="Escribe tu presupuesto"
        value={presupuesto}
        onChange={(e) => setPresupuesto(Number(e.target.value))}
        style={{
          padding: "10px",
          width: "220px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <p>
        🛒 Total de compra: <strong>${total}</strong>
      </p>

      <div
        style={{
          width: "100%",
          height: "22px",
          background: "#ddd",
          borderRadius: "20px",
          overflow: "hidden",
          margin: "15px 0",
        }}
      >
        <div
          style={{
            width: `${porcentaje}%`,
            height: "100%",
            background: colorBarra,
            transition: "0.5s",
          }}
        />
      </div>

      <p>
        <strong>{Math.round(porcentaje)}%</strong> del presupuesto utilizado
      </p>

      <p>
        {restante >= 0 ? (
          <>✅ Te quedan <strong>${restante}</strong></>
        ) : (
          <>⚠️ Excediste tu presupuesto por <strong>${Math.abs(restante)}</strong></>
        )}
      </p>
    </div>
  );
}

export default Presupuesto;