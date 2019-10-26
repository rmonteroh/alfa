import React from 'react';
import logo from './logo.svg';
import './App.css';
//router
import {Switch, Route} from 'react-router-dom'
//Components
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import Testimonial from './pages/testimonial/testimonial.component'
import Configurator from './pages/configurator/configurator.component'



class App extends React.Component {
  render(){
    return(
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/page-testimonial' component={Testimonial}></Route>
          <Route exact path='/page-configurator' component={Configurator}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
