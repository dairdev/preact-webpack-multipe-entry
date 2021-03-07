import { h } from "preact";

function Header({ title }){
	return (
		<h1 class="p-3 text-4xl" >{title}</h1>
	);
}

export { Header };
