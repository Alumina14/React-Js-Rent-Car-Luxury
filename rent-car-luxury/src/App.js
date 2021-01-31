import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CarsList from "./components/CarsList";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to="/app"> <div class="button">
            <div class="contenitore">
              <a href="#" class="bottone effetto" data-sm-link-text="Luxury"><span>Accedi</span></a>
            </div>
          </div></Link>
        </Route>
        <Route path="/app">
          <div className="container-fluid p-0 m-0">
            <Menu />
            <CarsList />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
