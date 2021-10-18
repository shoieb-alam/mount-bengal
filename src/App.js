import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Page/Shared/Header/Header';
import Home from './Page/Home/Home/Home';
import ServiceDetail from './Page/ServiceDetail/ServiceDetail';
import NotFound from './Page/NotFound/NotFound';
import Footer from './Page/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import Login from './Page/Home/Login/Login/Login';
import PrivateRoute from './Page/Home/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="">
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
