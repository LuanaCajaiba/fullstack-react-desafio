

import "./App.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Movimento from "./Movimento";



function App() {


  return (
    <div className="App">
      <header className="App-header">

        <Tabs

          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="operador-elevador" title="Operação do elevador">
            <Movimento />
          </Tab>
          <Tab eventKey="historico-chamadas" title="Histórico de chamadas">

          </Tab>
          <Tab eventKey="movimentacao-elevador" title="Log de movimentação do elevador">

          </Tab>
        </Tabs>
        </header>
    </div>
  );
}

export default App;
