import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="grid">
        {/* Cuadro naranja con un cuadro rojo interno */}
        <div className="box big orange">
          <div className="inner-box red"></div>
        </div>
        {/* Cuadro verde */}
        <div className="box green"></div>
        {/* Fila con tres cuadros rojos */}
        <div className="row">
          <div className="box red"></div>
          <div className="box red"></div>
          <div className="box red"></div>
        </div>
      </div>
    </div>
  );
}

export default App;