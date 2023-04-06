import "./App.css";
import NavbarComp from "./components/Header/NavbarComp";
import Allroutes from "./components/Allroutes";
import HomePage from "./components/pages/HomePage/Homepage";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const { cart, cartTotalQuantity } = useSelector((state) => state.productdata);
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="App">
      <NavbarComp
        isLogin={isLogin}
        setLogin={setLogin}
        cart={cart}
        cartTotalQuantity={cartTotalQuantity}
      />
      {/* <HomePage /> */}
      <Allroutes setLogin={setLogin} />
    </div>
  );
}

export default App;
