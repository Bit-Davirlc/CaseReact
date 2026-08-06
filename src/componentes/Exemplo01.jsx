import { useState } from "react";

export default function Exemplo01() {
  const [dia, setDia] = useState("Segunda");

  const mensagem = (() => {
    switch (dia) {
      case "Segunda":
        return "Inicio da semana";
      case "Sexta":
        return "Final da semana";
      case "Domingo":
        return "Domingueira";
      default:
        return "Mais um dia se foi";
    }
  })();

  return (
    <div>
      <h1 style={{ fontSize: 26 }}>Exemplo 01 - Case Básico</h1>

      <p>Dia atual: {dia}</p>
      <p>Mensagem: {mensagem}</p>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={() => setDia("Segunda")}>Segunda</button>
        <button onClick={() => setDia("Sexta")}>Sexta</button>
        <button onClick={() => setDia("Domingo")}>Domingo</button>
      </div>
    </div>
  );
}
