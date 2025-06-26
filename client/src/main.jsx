// import React from "react";
// import ReactDOM from "react-dom/client";

// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";






// import { AuthProvider } from './components/context/AuthContext/AuthContext';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <AuthProvider>
//       <App />
//        </AuthProvider>
//     </BrowserRouter>
    
//   </React.StrictMode>
// );






import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import { AuthProvider } from "./components/context/AuthContext/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
