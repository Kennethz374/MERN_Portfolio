import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../src/pages/Home"


function App() {
  return (
    <Router>
      <Switch>
      <Home/>


      </Switch>
    </Router>
  );
}

export default App;
