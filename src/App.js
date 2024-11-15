import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

// Lazy load the Home component
const Home = React.lazy(() => import('./pages/home'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
