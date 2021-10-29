import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home'
import second from './pages/second'
import NotFound from './pages/NotFound'
import testbs from './pages/testbs'

function App() {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/second' exact component={second}/>
        <Route path='/testbs' exact component={testbs}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
