import React, {Children, useContext} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/Dashboard";

import { AuthProvider, AuthContext } from './components/context/auth';

const AppRoutes = () => {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>;
        }

        if(!authenticated){
            return <Navigate to='/login' />;
        }

        return children;
    };

    return(
        <Router>   
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={
                        <Private>
                            <Dashboard/>
                        </Private>
                    } />
                </Routes> 
            </AuthProvider>                       
        </Router>
    )
}

export default AppRoutes;