import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-rout er-dom';
import './App.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import DashboardPage from './pages/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
