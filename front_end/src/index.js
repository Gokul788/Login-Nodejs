import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from './App';
import Sucess from './Sucess';
import Fail from './fali';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/sucess' element={<Sucess/>}></Route>
    <Route path='/fail' element={<Fail/>}></Route>
  </Routes>
  </BrowserRouter>
);

