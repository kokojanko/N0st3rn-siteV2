import React, {useState} from "react"
import { Transition, animated, config } from "react-spring";
import './App.css';
import Main from './components/Main/Main';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Faq from './components/FAQ/Faq'

function App() {

  const ShownMain = false
  const Loader = false

  return (
    <Router>
    <div>
      <Transition
      items={Loader}
      from={{display: "block", opacity: 1}}
      leave={{display: "block", opacity: 1}}
      enter={{display: "none", opacity: 0}}
      delay={2000}
      config={
        config.gentle
      }
      >
        {LoaderStyle =>
        <animated.div style={LoaderStyle} >
            <div class="lds-facebook"><div></div><div></div><div></div></div>
          </animated.div>
        }
      </Transition>
      <Transition
      items={ShownMain}
      from={{opacity: 0}}
      leave={{opacity: 0}}
      enter={{opacity: 1}}
      delay={2000}
      >
        {OpenStyle =>
        <animated.div style={OpenStyle} >
            <div className="App">
                <main className="wrapper">
                <Switch>
                  <Route exact path='/' component={Main} />
                  <Route exact path='/faq' component={Faq} />
                </Switch>
                </main>
                <footer className='info'>

                </footer>
            </div>
          </animated.div>
        }
      </Transition>
    </div>
    </Router>
  );
}

export default App;
