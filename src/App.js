import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile/:profileId">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
