import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home  from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Education from './components/Education';

function App() {
  return (

    <Router>
      <>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/portofolio" component={Portfolio} />
        </Switch>
      </>

    </Router>

  );
}

export default App;
