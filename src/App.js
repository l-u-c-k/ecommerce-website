import "./App.css";
import NavbarComp from "./components/Header/NavbarComp";
import Allroutes from "./components/Allroutes";
import HomePage from "./components/pages/HomePage/Homepage";
import { useState } from "react";

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="App">
      <NavbarComp isLogin={isLogin} setLogin={setLogin} />
      {/* <HomePage /> */}
      <Allroutes setLogin={setLogin} />
    </div>
  );
}

export default App;
