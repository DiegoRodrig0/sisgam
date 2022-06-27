import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MiniDrawer from "./components/MiniDrawer/MiniDrawer";
import MessageModal from "./components/MessageModal/MessageModal";
import Darkmode from 'darkmode-js';

function App() {

  const options = {
    // bottom: '64px',
    // right: '32px',
    // left: '32px',
    mixColor: '#fff', 
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c', 
    buttonColorLight: '#fff',
    saveInCookies: false, 
    label: '🌓',
    autoMatchOsTheme: true 
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  function showModalMessage(message) {
    setMessage(message);
    setModalOpen(true);
  }

  let outlet = <Outlet context={showModalMessage} />;

  return (
    <div className="App">
      <MiniDrawer content={outlet} />
      <MessageModal open={modalOpen} msg={message} handleClose={() => setModalOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;