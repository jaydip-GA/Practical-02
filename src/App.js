import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainData from './Components/MainData';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/astroidData' component={MainData} />
        <Route exact path='/:id' component={Details} />
        <Redirect from='/' to='/astroidData' />
      </Switch>
    </div>
  );
}

export default App;
