function Navbar({ cantidad }) {
  return (
    <nav
      style={{
        background: "#1565C0",
        color: "white",
        padding: "18px 30px",
        borderRadius: "15px",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>
        💙 SmartDescuentos
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          fontWeight: "bold",
        }}
      >
        <span>🏠 Inicio</span>

        <span>🛒 Mi Lista ({cantidad})</span>

        <span>💰 Presupuesto</span>
      </div>
    </nav>
  );
}

export default Navbar;