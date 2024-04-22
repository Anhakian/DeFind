import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import About from './components/About/About.jsx'
import Contribute from './components/Contribute/Contribute.jsx';
import MapView from './components/MapView/MapView.jsx';
import Resources from './components/Resources/Resources.jsx';
import SubmitForm from './components/SubmitForm/SubmitForm.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route index={false} path="/about" element={<About />} />
        <Route index={false} path="/contribute" element={<Contribute />} />
        <Route index={false} path="/contribute/:building" element={<SubmitForm />} />
        <Route index={false} path="/resources" element={<Resources />} />
        <Route index={false} path="/map/:building" element={<MapView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
