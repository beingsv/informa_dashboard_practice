import Frontend from "./component/Frontend";
import Incidentchart from "./component/Incidentchart";
import Middleware from "./component/Middleware";
import './App.css';
function App() {
  return (
    <div className="App">
      <h1 className="dashboard-heading" style={{ textAlign: "center" }}>Dashboard</h1>
      <div className="frontend">
        <Incidentchart/>
        <Frontend/>
        <Middleware/>
      </div>
    </div>
  );
}

export default App;
