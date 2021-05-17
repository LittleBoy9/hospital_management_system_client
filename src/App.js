import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SideBar from './components/SideBar';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

// PRIME REACT //
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

// PRIME REACT RIPPLE EFFECT //
import PrimeReact from "primereact/api";
PrimeReact.ripple = true;

function App() {
  return (
    <>
         <SideBar />
         <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/conatct' component={Contact}/>
         </Switch>
    </>
  );
}


export default App;
