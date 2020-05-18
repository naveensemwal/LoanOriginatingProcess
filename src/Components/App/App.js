import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from '../../UserContext'
import './App.scss';

// Containers
const DefaultLayout = React.lazy(() => import('../DefaultLayout/DefaultLayout'));

const Login = React.lazy(() => import('../Login/Login'));
const Register = React.lazy(() => import('../Register/Register'));
const Page404 = React.lazy(() => import('../Page404/Page404'));
const Page500 = React.lazy(() => import('../Page500/Page500'));

const loading = () => <div className="animated fadeIn pt-3 text-centFer">Loading...</div>;

const user = { name: 'Tania', loggedIn: true }

class App extends Component {

  render() {
    return (
      <UserProvider value={user}>
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
              <Route exact path="/Complaint/:id" name="Complaint Details" render={props => <DefaultLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </Router>
      </UserProvider>
    );
  }
}

export default App;
