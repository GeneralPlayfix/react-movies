import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';

const App = () => {
  return (

    //==== Navigation ====//
    <BrowserRouter>
      {/* les différentes routes de l'application */}
      <Routes>
        {/* on définie une route sur le /, ici on appelle le composant home */}
        <Route path="/" element={<Home />} />
        <Route path="/coup-de-coeur" element={<UserList />} />
        {/* ici on redirige si ça ne correspond à aucune route existante */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;