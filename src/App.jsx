import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { router } from './routes/routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route) => {
          return <Route key={route.name} exact path={route.path} element={route.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
