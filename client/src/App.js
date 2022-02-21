import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from './layout/Layout';


import RealAdminNav from './layout/RealAdminNav';
import Navbar from "./layout/Navbar";
import Home  from "./pages/Home";

//Redux
import { useDispatch } from 'react-redux';

// Router
import { Switch, Route } from 'react-router-dom';
//Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

//Admin
import AdminDashboard from './pages/admin/AdminDashboard';
import DocUpload  from './pages/admin/DocUpload';
import AdminCreatePerson from './pages/admin/AdminCreatePerson';
import HomeAdmin from './pages/admin/HomeAdmin';
import Upload1 from './pages/admin/Upload1';


//User
import HomeUser from "./pages/user/HomeUser";

//function
import { currentUser } from './functions/auth';


//Route
import UserRoute from './components/routes/UserRoute';
import AdminRoute from './components/routes/AdminRoute';





function App() {
  const dispatch = useDispatch();
  //const idTokenResult = localStorage.token;
  //console.log('APP.js', idTokenResult)

  useEffect(() => {
    const idTokenResult = localStorage.token;
    if (idTokenResult){
      currentUser(idTokenResult)
        .then(res => {
          console.log(res.data)
          dispatch({
            type:'LOGGED_IN_USER',
            payload:{
              name: res.data.name,
              role: res.data.role,
              token: idTokenResult
            }
          })
        }).catch(err => {
          console.log(err)
        })
    }
    
  }, [dispatch])


  return (
    <>

      
      <ToastContainer autoClose={5000}/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        
        <AdminRoute exact path="/admin/upload1" component={HomeAdmin} />
        <UserRoute exact path="/search" component={HomeUser} />
      </Switch>
    </>
  );
}

export default App;
