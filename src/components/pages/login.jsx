// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-hidden="true">
//         <div className="modal-dialog modal-lg" role="document">
//           <div className="modal-content rounded-0 border-0 p-4">
//             <div className="modal-header border-0">
//               <h3>Login</h3>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <form action="#" className="row">
//                 <div className="col-12">
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="loginPhone"
//                     name="loginPhone"
//                     placeholder="Phone"
//                   />
//                 </div>
//                 <div className="col-12">
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     id="loginName"
//                     name="loginName"
//                     placeholder="Name"
//                   />
//                 </div>
//                 <div className="col-12">
//                   <input
//                     type="password"
//                     className="form-control mb-3"
//                     id="loginPassword"
//                     name="loginPassword"
//                     placeholder="Password"
//                   />
//                 </div>
//                 <div className="col-12">
//                   <button type="submit" className="btn btn-primary">LOGIN</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';

// const Login = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleModalToggle = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div>
//       {/* Trigger Button */}
//       <li className="list-inline-item">
//         <a
//           className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
//           href="#"
//           onClick={handleModalToggle}
//         >
//           Login
//         </a>
//       </li>

//       {/* Modal */}
//       {showModal && (
//         <div
//           className="modal fade show"
//           id="loginModal"
//           tabIndex="-1"
//           role="dialog"
//           aria-hidden="true"
//           style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
//         >
//           <div className="modal-dialog modal-lg" role="document">
//             <div className="modal-content rounded-0 border-0 p-4">
//               <div className="modal-header border-0">
//                 <h3>Login</h3>
//                 <button
//                   type="button"
//                   className="close"
//                   aria-label="Close"
//                   onClick={handleModalToggle}
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form action="#" className="row">
//                   <div className="col-12">
//                     <input
//                       type="text"
//                       className="form-control mb-3"
//                       id="loginPhone"
//                       name="loginPhone"
//                       placeholder="Phone"
//                     />
//                   </div>
//                   <div className="col-12">
//                     <input
//                       type="text"
//                       className="form-control mb-3"
//                       id="loginName"
//                       name="loginName"
//                       placeholder="Name"
//                     />
//                   </div>
//                   <div className="col-12">
//                     <input
//                       type="password"
//                       className="form-control mb-3"
//                       id="loginPassword"
//                       name="loginPassword"
//                       placeholder="Password"
//                     />
//                   </div>
//                   <div className="col-12">
//                     {/* <button type="submit" className="btn btn-primary">LOGIN</button> */}
//                     <a href="#" className="btn btn-primary" onClick={handleSubmit}>LOGIN</a>

//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';

const login = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
    console.log('Login form submitted');
  };

  return (
    <div>
      {/* Trigger Button */}
      <li className="list-inline-item">
        <a
          className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
          href="#"
          onClick={handleModalToggle}
        >
          Login
        </a>
      </li>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          id="loginModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
          style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content rounded-0 border-0 p-4">
              <div className="modal-header border-0">
                <h3>Login</h3>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleModalToggle}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="#" className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="loginPhone"
                      name="loginPhone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="loginName"
                      name="loginName"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control mb-3"
                      id="loginPassword"
                      name="loginPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-12">
                    {/* Use link tag instead of button */}
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      LOGIN
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default login;
