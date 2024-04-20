import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import About from './components/About/About.jsx'
import Contribute from './components/Contribute/Contribute.jsx';
import Resources from './components/Resources/Resources.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route index={false} path="/about" element={<About />} />
        <Route index={false} path="/contribute" element={<Contribute />} />
        <Route index={false} path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
