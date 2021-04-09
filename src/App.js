import './App.css';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RestaurantsList from './components/RestaurantsList';
import Login from './components/Login';
import User from './components/User';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/restaurant" component={RestaurantsList} />
            <Route path='/users/:username' component={User} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
