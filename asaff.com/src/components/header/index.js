import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.sass';
import TextLoop from "react-text-loop"

const Header = () => (
	<header>
		<div class={style.asaffLogo}></div>
		<div class={style.tagline__container}>
			<p class={style.tagline__static}>We can assist you with</p>
			{" "}
			<TextLoop mask={true} interval={2000} springConfig={{ stiffness: 120, damping: 15 }}>
				<h1 class={style.tagline__dynamic}>Logistics</h1>
				<h1 class={style.tagline__dynamic}>Shipping</h1>
				<h1 class={style.tagline__dynamic}>Forwarding</h1>
				<h1 class={style.tagline__dynamic}>ICT</h1>
			</TextLoop>
		</div>
	</header>
);

export default Header;
