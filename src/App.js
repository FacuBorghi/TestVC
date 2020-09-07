import React from 'react';
import Contador from './components/Contador'
import Lista from './components/Lista'
import Form from './components/Form'
import Notfound from './pages/Notfound'
import Users from './pages/Users'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (  

    <BrowserRouter>


         <Switch>

           <Route exact path="/contador" component ={Contador} />
           
           <Route exact path="/lista" component ={Lista} />
           
           <Route exact path="/form" component ={Form} />

           <Route exact path="/users" component ={Users} />

           
           <Route component ={Notfound} />
      
         </Switch>
    </BrowserRouter>
        
 
  )
}

export default App;
