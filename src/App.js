import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import Todos from './components/Todos/Todos'
import Categories from './components/Categories/Categories'
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Navigation />
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/todos" component={Todos} />
              <PrivateRoute path="/categories" component={Categories} />
              <Route component={NotFound} />
            </Switch>
          </Router>
          
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
