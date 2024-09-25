// import React from "react";
// import "./style.scss";
// import "./index.scss";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // vendors
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// // importing pages
// import Home from "./components/pages/Home.jsx";
// import Register from "./components/pages/Register.jsx";
// import Login from "./components/pages/login.jsx";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

// import React from 'react'
// import "./style.scss"
// import { BrowserRouter, Routes, Route } from "react-router-dom"

// // vendors
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

// // importing pages
// import Home from "./components/pages/Home.jsx"
// import CustomerLogin from './components/pages/login-register/CustomerLogin.jsx'
// import CustomerRegistration from './components/pages/login-register/CustomerRegistration.jsx'
// import Account from './components/pages/Account.jsx'

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>

//           <Route path='/' element={<Home />} />

//           <Route path='/user/login' element={<CustomerLogin />} />

//           <Route path='/user/register' element={<CustomerRegistration />} />

//           <Route path='/account' element={<Account />} />

//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App




import React from 'react'
import "./style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// vendors 
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

// importing pages
import Home from "./components/pages/Home.jsx"
import CustomerLogin from './components/pages/login-register/CustomerLogin.jsx'
import CustomerRegistration from './components/pages/login-register/CustomerRegistration.jsx'
import Account from './components/pages/Account.jsx'
import Dashboard from './components/pages/dashboard.jsx';
import Admin from './components/admin.jsx';
import AdminLogin from './components/adminLogin.jsx';


// import login from './components/pages/login.jsx'
// import HeaderCarousel from './components/includes/HeaderCarousel.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          
          <Route path='/user/login' element={<CustomerLogin />} />
          
          <Route path='/user/register' element={<CustomerRegistration />} />

          <Route path='/account' element={<Account />} />

          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/admin' element={<Admin/>}/>
    
          <Route path='/adminLogin' element={<AdminLogin/>}/>


          {/* <Route path='/HeaderCarousel' element={<HeaderCarousel />} /> */}

          

          {/* <Route path='/login' element={<Login />} /> */}
          
      
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
