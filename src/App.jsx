//Importação
import Exemplo01 from "./componentes/Exemplo01";
import Separador from "./componentes/Separador";

//Criar o App
export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Lógica com React - Case React</h1>
      <div>
        <Separador />
        <Exemplo01 />
        <Separador />

      </div>
    </div>
  );
}
