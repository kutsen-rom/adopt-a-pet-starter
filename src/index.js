import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home';
import PetDetailsPage from './pages/detail';
import SearchPage from './pages/search';
import PetDetailsNotFound from './pages/petDetailsNotFound';


const { worker } = require('./mocks/browser');
worker.start();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path=":type"  element={<HomePage />}  />
          <Route path=":type/:id" element={<PetDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/pet-details-not-found" element={<PetDetailsNotFound />} />
        </Route>
        
       

        
        <Route path="*"
          element={
            <main style={{ padding: "1rem"}}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
