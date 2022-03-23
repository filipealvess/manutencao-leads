import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Manutenção de Leads</h1>} />
    </Routes>
  );
}
