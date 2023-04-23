import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Update from './components/update';
export default class App extends React.Component {
  render() {
    return(
      <>
       
        <Routes>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </>
    );
  }
}