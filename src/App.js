import React, {useEffect} from "react"
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <main className="wrapper">
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
          </main>
          <footer className='info'>

          </footer>
      </div>
    </Router>
  );
}

export default App;
