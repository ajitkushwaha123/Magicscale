import { useState } from "react";
import { Route, Routes } from "react-router-dom"; // also import Routes
import Home from "./Pages/Home";
import ReturnPolicy from "./components/ReturnPolicy";
import "./App.css";
import ShippingPolicy from "./components/ShippingPolicy";
import PrivacyPolicies from "./components/PrivacyPolicies";
// import HomeWork from "./components/HomeWork";
// import Work from "./components/work";
import Terms from "./components/Terms";
import Checkout from "./Pages/Checkout";
// import Services from "./components/work";
import PaymentSuccess from "./Pages/PaymentSuccess/PaymentSuccess"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
         {/* <Route path="/" element={<HomeWork />} /> */}
          {/* <Route path="/Services" element={<Work />} /> */}

        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicies />} />
        <Route path="/terms-and-condition" element={<Terms />} />
        <Route path="/checkout/:id" element={<Checkout />} /> 
          <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
//hlo yes   hlo g]h