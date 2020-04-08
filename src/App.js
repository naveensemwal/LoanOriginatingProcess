import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './UserContext'
import './App.scss';
// import './styles/wieldy.less';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
// const Complaint = React.lazy(() => import('./views/Pages/Complaint'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const user = { name: 'Tania', loggedIn: true }

class App extends Component {

  render() {
    return (
      <UserProvider value={user}>
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              {/* <Route exact path="/Complaint/:id" name="Complaint Page" render={props => <Complaint {...props}/>} /> */}
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              <Route exact path="/Complaint/:id" name="Complaint Details" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
      </UserProvider>
    );
  }
}

export default App;
