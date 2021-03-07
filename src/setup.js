import { preact, h, render, Fragment } from "preact";
import { NavBar } from "./components/navbar.js";
import { Header } from "./components/header";

function Application() {
	return (
		<Fragment>
			<Header title="Setup" />
			<NavBar />
			<p className="m-3">this is the setup page</p>
		</Fragment>
	);
}

const App = <Application />;

render(App, document.body);
