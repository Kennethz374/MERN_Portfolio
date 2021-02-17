import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../src/pages/Home";
import Ref from "../src/pages/Ref";
import Experience from "./pages/Experience";
import Error from "../src/pages/Error";
import Navbar from "../src/components/Navbar";
import Project from "../src/pages/Project";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Home exact path="/" />
				<Experience exact path="/experience" />
				<Ref exact path="/reference" />
				<Project exact path="/project" />
				<Error path="*" />
			</Switch>
		</Router>
	);
}

export default App;
