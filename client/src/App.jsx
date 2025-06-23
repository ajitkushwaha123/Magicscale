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
import VerifyOtp from "./components/Signup/VerifyOTP";
import ProtectedRoute from './components/ProtectedRoute'; 
import PhoneOTPLogin from './components/PhoneOTPLogin';
import ZomatoCoursePage from    './Pages/depthcard/CoursePage/ZomatoCoursePage'; 
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import SellerDashboard from './Pages/SellerDashboard/SellerDashboard';
import Profile from './Pages/UserDashboard/Profile'; 
import SwiggyOnboardingCourse from "./Pages/depthcard/SwiggyCoursePage/SwiggyCoursePage";
import FssaiLicenseCourse from "./Pages/depthcard/FssaiCoursePage/FssaiCoursePage";
import Logout from "./Pages/Logout";

import Subscriptions from './Pages/UserDashboard/Subscriptions'; 




// import Services from "./components/work";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<HomeWork />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/course/zomato-onboarding" element={<ZomatoCoursePage />} />
        <Route path="/course/swiggy-onboarding" element={<SwiggyOnboardingCourse />} />
        <Route path="/course/fssai-onboarding" element={<FssaiLicenseCourse />} />
        <Route path="/services/zomato" element={<ZomatoDetails />} />
        <Route path="/services/swiggy" element={<SwiggyDetails />} />
        <Route path="/services/fssai" element={<FssaiDetails />} />
        <Route path="/services" element={<Work />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicies />} />
        <Route path="/terms-and-condition" element={<Terms />} />
        <Route path="/login-phone" element={<PhoneOTPLogin />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
       
        <Route
          path="/SellerDashboard"
          element={
            <ProtectedRoute allowedRoles={['seller', 'admin']}>
              <SellerDashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/dashboard" element={<UserDashboard />} /> */}
        {/* <Route path="/checkout/:id" element={<Checkout />} />  */}
        <Route
          path="/checkout/:id"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <Checkout />
            </ProtectedRoute>
          }
        />
          <Route
          path="/Subscriptions"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <Subscriptions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
//hlo yes   hlo g]h