import { useState } from "react";
import { Route, Routes } from "react-router-dom"; // also import Routes
import Home from "./Pages/Home";
import ReturnPolicy from "./components/ReturnPolicy";
import "./App.css";
import ShippingPolicy from "./components/ShippingPolicy";
import PrivacyPolicies from "./components/PrivacyPolicies";
import HomeWork from "./components/HomeWork";
import Work from "./components/Work";
import Terms from "./components/Terms";
import Checkout from "./Pages/Checkout";
import ZomatoDetails from "./Pages/depthcard/ZomatoDetails";
import SwiggyDetails from "./Pages/depthcard/SwiggyDetails";
import FssaiDetails from "./Pages/depthcard/FssaiDetails";
import Login from './components/Login/Login';
import ForgotPassword from './components/Login/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Login/ResetPassword/ResetPassword';
import Signup from './components/Signup/Signup';
import ProtectedRoute from './components/ProtectedRoute'; 
import PhoneOTPLogin from './components/PhoneOTPLogin';
import ZomatoCoursePage from    './pages/depthcard/CoursePage/ZomatoCoursePage'; 





// import Services from "./components/work";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/" element={<HomeWork />} />
         
         <Route path="/course/zomato-onboarding" element={<ZomatoCoursePage />} />
          <Route path="/services/zomato" element={<ZomatoDetails />} />
        <Route path="/services/swiggy" element={<SwiggyDetails />} />
        <Route path="/services/fssai" element={<FssaiDetails />} />
          <Route path="/Services" element={<Work />} />
            <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicies />} />
        <Route path="/terms-and-condition" element={<Terms />} />
        <Route path="/login-phone" element={<PhoneOTPLogin />} />

        {/* <Route path="/checkout/:id" element={<Checkout />} />  */}


        <Route
  path="/checkout/:id"
  element={
    <ProtectedRoute allowedRoles={['user']}>
     <Checkout />
    </ProtectedRoute>
  }
/> 
      </Routes>
    </div>
  );
}

export default App;
//hlo yes   hlo g]h