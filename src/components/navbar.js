import { preact, h } from "preact";

function NavBar(props) {
	return (
		<aside>
			<nav className="m-3">
				<ul class="flex">
					<li>
						<a class="mr-6 text-blue-500" href="home.html">Home</a>
					</li>
					<li>
						<a class="mr-6 text-blue-500" href="setup.html">Setup</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export { NavBar };
