import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/home/home';
// import Routing from '../src/routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Routing /> */}
        <Home />
      </Provider>
    </div>
    // We make digital (and magical)…
    // Products
    // Branding
    // Experiences

  );
}

export default App;
