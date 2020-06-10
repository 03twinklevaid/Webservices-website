import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import Routing from '../src/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store = {store}> 
          <Routing />
        </Provider>
      </header>
    </div>
  );
}

export default App;
