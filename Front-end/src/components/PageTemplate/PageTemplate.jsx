import React, { useContext } from "react";
import { AuthContext } from '../Context/Auth';
/*import './template.css';*/

const Template = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1>Template</h1>;            
    </>
  )
};

export default Template;