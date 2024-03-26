import "./App.css";
import OfficeHeader from "./component/OfficeHeader";
import OfficeFooter from "./component/OfficeFooter";
import OfficeBody from "./component/OfficeBody";

function App() {
  return (
    <div className="App">
      <OfficeHeader />
      <div className="main">
        <OfficeFooter />
        <OfficeBody />
      </div>
    </div>
  );
}

export default App;
