import React,{useState,createContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'


export const Context = createContext();

const ContextApi = ({children}) => {
 const [user, setuser] = useState(null)
 const [isLoggedin,setisLoggedin] = useState(false)
 const navigate = useNavigate()
 

//  useEffect(() => {
//    const token = localStorage.getItem('token')
// //    if (token) {
// //     const decoded = jwtDecode(token.toString);
// //     setuser({
// //         ...decoded,
// //         token
// //     })

// //    }
//  }, [])

 const login =(token,role)=>{

const decoded = jwtDecode(token)
setuser({
    ...decoded,
    token,role
});
localStorage.setItem('token', token);
localStorage.setItem('role', role);
setisLoggedin(true)
localStorage.setItem('logged',isLoggedin)
 }

 const logout = () => {
    setuser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role')
    setisLoggedin(false)
    navigate('/account')
    
    
  };
 

  return (
    <>
    <Context.Provider value={{user,login,logout,isLoggedin}}>
     {children}
    </Context.Provider>
    </>
  )
}

export default ContextApi