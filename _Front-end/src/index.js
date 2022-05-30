import React from 'react'
import ReactDOM from 'react-dom'
import App from './App' 
import LoginPage from './components/LoginPage/LoginPage';
import Reports from './components/Reports/Reports';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./components/Context/Auth.jsx"
import { useContext } from 'react';

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading"> Carregando ... </div>;
    }
    if (!authenticated) {
      return (<Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>);
    }
    return (<Routes>
      <Route exact path="/" element={<App />}>
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/exportExcel" element={<Reports />} />
      </Route>
    </Routes>)
  }
  return (
    <BrowserRouter>
      <AuthProvider>
        <Private>
        </Private>
      </AuthProvider>
    </BrowserRouter >
  );
};

export default AppRoutes;

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
