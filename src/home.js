import { preact, h, render, Fragment } from "preact";
import { NavBar } from "./components/navbar.js";
import { Header } from "./components/header";

function Application() {
	return (
		<Fragment>
			<Header title="Home Page" />
			<NavBar />
			<p className="p-3">this is the home page</p>
		</Fragment>
	);
}

const App = <Application />;

render(App, document.body);
