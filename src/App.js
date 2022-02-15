import './App.css';

import React, { useState } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_MY_API
  const [progress, setProgress] = useState(0)

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0b075c';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
 
    return (
      <div>
        <Router>
        <NavBar toggleMode={toggleMode}  />
 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News mode={mode} toggleMode={toggleMode}  setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News mode={mode} toggleMode={toggleMode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;