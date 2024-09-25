// import  { useState } from 'react';

// const AcountComp = () => {
//   // Set the initial state to false to show Register form by default
//   const [isLogin, setIsLogin] = useState(false);

//   // Function to handle the toggle switch change
//   const handleToggle = () => {
//     setIsLogin(!isLogin); // Toggle between Login and Register
//   };

//   return (
//     <>
//       {/* <!-- Start Page Banner Area --> */}
//       <div className="page-banner-area">
//         <div className="container-fluid">
//           <div className="single-page-banner-content">
//             <h1>My Account</h1>
//             <ul>
//               <li><a href="index.html">Home</a></li>
//               <li>My Account</li>
//             </ul>
//           </div>
//         </div>
//         <div className="page-banner-shape-1">
//           <img src="assets/images/banner/banner-one-shape-1.png" alt="images"/>
//         </div>
//         <div className="page-banner-shape-2">
//           <img src="assets/images/banner/banner-one-shape-2.png" alt="images"/>
//         </div>
//         <div className="page-banner-shape-3">
//           <img src="assets/images/banner/banner-one-shape-3.png" alt="images"/>
//         </div>
//       </div>
//       {/* <!-- End Page Banner Area --> */}

//       {/* <!-- Start My Account Area --> */}
//       <div className="my-account-area pt-100 pb-100">
//         <div className="container">
//           <div className="section-title">
//             <span className="top-title">My Account</span>
//             <h2>The Conference Create A New Account.</h2>
//           </div>

//           {/* Toggle Switch */}
//           <div className="plans-switcher">
//             <div className="switcher-box">
//               <label className={`toggler ${isLogin ? 'toggler--is-active' : ''}`} id="filt-yearly">Login</label>
//               <div className="toggle">
//                 <input
//                   type="checkbox"
//                   id="switcher"
//                   className="check"
//                   onChange={handleToggle}
//                   checked={!isLogin}
//                 />
//                 <b className="b switch"></b>
//               </div>
//               <label className={`toggler ${!isLogin ? 'toggler--is-active' : ''}`} id="filt-monthly">Register</label>
//             </div>
//           </div>

//           {/* Conditional Rendering based on toggle */}
//           {isLogin ? (
//             <div id="login" className="wrapper-full">
//                <form className="my-account-content">
//                 <h2>Full Up The Login Form</h2>
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <input type="email" className="form-control" placeholder="Email Address"/>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <input type="password" className="form-control" placeholder="Password"/>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 col-sm-6 col-md-6">
//                     <div className="form-group">
//                       <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
//                         <label className="form-check-label" htmlFor="flexCheckDefault">
//                           Remember Me
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 col-sm-6 col-md-6">
//                     <div className="text-account">
//                       <p><a href="forgot-password.html">Forgot Password?</a></p>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <button type="submit" className="default-btn btn-style-fore">Login</button>
//                   </div>
//                 </div>
//                 <div className="border-or">
//                   <span>Or Login With</span>
//                 </div>
//                 <div className="my-account-list">
//                   <ul>
//                     <li><a href="https://www.facebook.com/" target="_blank"><i className='bx bxl-facebook'></i></a></li>
//                     <li><a href="https://twitter.com/" target="_blank"><i className='bx bxl-twitter'></i></a></li>
//                     <li><a href="https://www.linkedin.com/" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
//                     <li><a href="https://www.google.com/" target="_blank"><i className='bx bxl-google'></i></a></li>
//                   </ul>
//                 </div>
//                 <p>Don’t Have an Account? <a href="my-account.html">Create One</a></p>
//               </form>
//             </div>
//           ) : (
//             <div id="register" className="wrapper-full">
//               <form className="my-account-content register-form">
//                 <h2>Fill Up The Register Form</h2>
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <input type="text" className="form-control" placeholder="Name"/>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <input type="email" className="form-control" placeholder="Email Address"/>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <input type="password" className="form-control" placeholder="Password"/>
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <button type="submit" className="default-btn btn-style-fore">Register</button>
//                   </div>
//                 </div>
//                 <div className="border-or">
//                   <span>Or Register With</span>
//                 </div>
//                 <div className="my-account-list">
//                   <ul>
//                     <li><a href="https://www.facebook.com/" target="_blank"><i className='bx bxl-facebook'></i></a></li>
//                     <li><a href="https://twitter.com/" target="_blank"><i className='bx bxl-twitter'></i></a></li>
//                     <li><a href="https://www.linkedin.com/" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
//                     <li><a href="https://www.google.com/" target="_blank"><i className='bx bxl-google'></i></a></li>
//                   </ul>
//                 </div>
//                 <p>Don’t Have an Account? <a href="my-account.html">Create One</a></p>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* <!-- End My Account Area --> */}
//     </>
//   );
// }

// export default AcountComp;



import { useState,useContext } from 'react';
import axios from 'axios';
 import {Context} from '../ContextApi/ContextApi'// Context to manage logged-in user
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2'

const AcountComp = () => {
  const {login } =useContext(Context)  // Access login method from UserContext
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only for registration
  const [role, setRole] = useState('attendee'); // Default role for registration
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  // Toggle between Login and Register
  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError(''); // Clear any error messages when toggling
  };

  // Handle Form Submission for Login/Registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error
  
    if (isLogin) {
      // Login request
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        const token = response.data.token;
        const role = response.data.role;
        login(token,role);
        if (role === 'organizer') {
          navigate('/admin');
        } else if (role === 'exhibitor') {
          navigate('/exhibitor');
        } else if (role === 'attendee') {
          navigate('/attendee');
        } else {
          navigate('/account');  // Default redirect
        } // Save token to UserContext
         // Redirect to user dashboard after successful login
      } catch (error) {
        setError('Invalid login credentials.');
        console.error('Login error:', error); // Log the error
      }
    } else {
      // Register request
      try {
        const response = await axios.post('http://localhost:5000/api/auth/register', { email, password, name, role });
        
        if (response.status === 201 || response.status === 200) { // Check for successful status code
          // const token = response.data.token;
          
          Swal.fire({
            title: "Sign UP",
            text: "Registered Successfully",
            icon: "success"
          });
          navigate('/account'); // Redirect to user dashboard after successful registration
        } else {
          setError('Failed to register. Try again.');
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setError(error.response.data.message || 'Failed to register. Try again.');
        } else {
          setError('Failed to register. Try again.');
        }
        console.error('Registration error:', error); // Log the error to understand the issue
      }
    }
  };
  

  return (
    <>
      <div className="page-banner-area">
        {/* Banner Content */}
      </div>

      <div className="my-account-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">My Account</span>
            <h2>{isLogin ? 'Login to Your Account' : 'Create a New Account'}</h2>
          </div>

          <div className="plans-switcher">
            <div className="switcher-box">
              <label className={`toggler ${isLogin ? 'toggler--is-active' : ''}`} id="filt-yearly">Login</label>
              <div className="toggle">
                <input
                  type="checkbox"
                  id="switcher"
                  className="check"
                  onChange={handleToggle}
                  checked={!isLogin}
                />
                <b className="b switch"></b>
              </div>
              <label className={`toggler ${!isLogin ? 'toggler--is-active' : ''}`} id="filt-monthly">Register</label>
            </div>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error messages if any */}

          {/* Conditional Rendering for Login or Register */}
          <div className="wrapper-full">
            <form className="my-account-content" onSubmit={handleSubmit}>
              <h2>{isLogin ? 'Fill in the Login Form' : 'Fill in the Register Form'}</h2>
              <div className="row">
                {!isLogin && (
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {!isLogin && (
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select
                        className="form-control"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="attendee">Attendee</option>
                        <option value="organizer">Organizer</option>
                        <option value="exhibitor">Exhibitor</option>
                      </select>
                    </div>
                  </div>
                )}
                <div className="col-lg-12">
                  <button type="submit" className="default-btn btn-style-fore">
                    {isLogin ? 'Login' : 'Register'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcountComp;
