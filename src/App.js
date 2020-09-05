import React from 'react';
import './css/App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
