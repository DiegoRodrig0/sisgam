import React, { useContext } from "react";
import './Dashboard.css';
import Card from "../Card/Card";

const Dashboard = () => {  

  return (
    <div id="login">
      <h1>Dashboard</h1>;      

      <Card 
      tittle ='Unidade Monte Castelo - São Luís MA'
      imageUrl='http://www.oimparcial.com.br/_midias/jpg/2015/10/01/341x227/1_ifma_monte_castelo_2-135324.jpg'
      body='Av. Getúlio Vargas, Monte Castelo'
      crew='4 Técnicos'
      />

    </div>
  )
};

export default Dashboard;