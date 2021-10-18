import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Page/Shared/Header/Header';
import Footer from './components/Page/Shared/Footer/Footer';
import Home from './components/Page/Home/Home/Home';
import Login from './components/Page/Login/Login';
import Services from './components/Page/Home/Services/Services';
import NotFound from './components/Page/NotFound/NotFound';
import ServiceDetail from './components/Page/ServiceDetail/ServiceDetail';


function App() {
  return (
    <div className="App">
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
          <Route path="/services/:serviceId">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path="">
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
