import React from 'react';
import classes from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import Account from './Components/AccountPage/Account';
import NewOrder from './Components/NewOrderPage/NewOrder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <div className={classes.mainContainer}>
          <Switch>
            <Route path="/account" component={Account} />
            <Route path="/addneworder" component={NewOrder} />
            <Route path="/" component={Login} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
