import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/auth";  // Asegúrate de que el archivo se llama Auth.js con 'A' mayúscula
import AddResource from "./components/AddResource";
import ResourceList from "./components/ResourceList";

function App() {
  const [user, setUser] = useState(null);  // Estado para almacenar la información del usuario autenticado

  return (
    <Router>
      <div>
        <h1>Bienvenido a Banco de Recursos Académicos</h1>
        {/* Aquí puedes mostrar el estado del usuario */}
        {user ? (
          <p>Bienvenido, {user.displayName}</p>
        ) : (
          <p>No has iniciado sesión.</p>
        )}
        
        <Routes>
          {/* Rutas del proyecto */}
          <Route path="/" element={<ResourceList />} />
          <Route path="/auth" element={<Auth setUser={setUser} />} />
          <Route path="/add" element={<AddResource />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
