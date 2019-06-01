import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.sass';

const Header = () => (
	<header>
		<div class={style.asaffLogo}></div>
		<div class={style.tagline__container}>
			<p class={style.tagline__static}>We can help you with</p>
			<h1 class={style.tagline__dynamic}>ICT</h1>
		</div>
	</header>
);

export default Header;
