import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,
    Routes,
    Route } from 'react-router-dom';
import App from './App';
import SignUp from './components/SignUp';
import Intro from './Intro';
import Result from './components/Result';

// 다른 app 임포트 할때는 항상 Dom 사이에다가 둠

ReactDom.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/user" element={<SignUp />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  , document.getElementById('root')
);