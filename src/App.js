import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../src/pages/Home";
import Ref from "../src/pages/Ref";
import Project from "../src/pages/Project";
import Error from "../src/pages/Error";

function App() {
	return (
		<Router>
			<Switch>
				<Home exact path="/" />
				<Project exact path="/project" />
				<Ref exact path="/reference" />
				<Error path="*" />
			</Switch>
		</Router>
	);
}

export default App;
