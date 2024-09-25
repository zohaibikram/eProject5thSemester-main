import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterComp from "./components/footer/FooterComp"
import HeaderComp from "./components/header/HeaderComp"

import { useEffect, useState,createContext } from "react"

import ContextApi from "./components/ContextApi/ContextApi"
import Routing from "./components/Routing/Routing"

export const Context = createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('nestu_theme') || 'theme-light');

  const toggleTheme = () => {
      const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light';
      setTheme(newTheme);
      localStorage.setItem('nestu_theme', newTheme);
      document.documentElement.className = newTheme;
  };

  useEffect(() => {
      document.documentElement.className = theme;
  }, [theme]); 
  //context api
//   const [user, setuser] = useState(null)
//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (token) {
//      const decoded = jwtDecode(token);
//      setuser({
//          ...decoded,
//          token
//      })
 
//     }
//   }, [])

//   const login =(token)=>{
//     const decoded = jwtDecode(token)
//     setuser({
//         ...decoded,
//         token
//     });
//     localStorage.setItem('token',token)
//      }
    
//      const logout = () => {
//         setUser(null);
//         localStorage.removeItem('token');
//       };
  return (
    <>
      <BrowserRouter>
      <ContextApi>
      <div className="preloader">
            <div className="loader">
                <div className="loader-outter"></div>
                <div className="loader-inner"></div>
                <span>N</span>
            </div>
        </div>
        <div className="switch-theme-mode">
            <label id="switch" className="switch">
                <input type="checkbox" onChange={(e) => toggleTheme(e)} id="slider"/>
                <span className="slider round"></span>
            </label>
        </div>

        {/* React Component Start */}
    
  <HeaderComp/>
     <Routing/>


<FooterComp/>

{/* React Component End  */}

  {/* <!-- Start Go Top Area --> */}
        <div className="go-top">
            <i className="flaticon-up-arrows"></i>
            <i className="flaticon-up-arrows"></i>
        </div>
        {/* <!-- End Go Top Area --> */}

      </ContextApi>
      </BrowserRouter>

           </>
  )
}

export default App
