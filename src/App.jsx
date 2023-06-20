import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { router } from './routes/routes';
import _ from 'lodash';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {_.map(router, (route) => {
          return <Route key={route.name} exact path={route.path} element={route.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
