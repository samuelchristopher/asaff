import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.sass';
import TextLoop from "react-text-loop"

const Header = () => (
	<header>
		<div class={style.asaffLogo}></div>
		<div class={style.tagline__container}>
			<p class={style.tagline__static}>We can help you with</p>
			<div class={style.text__container}>
				<TextLoop mask={true} interval={2000} springConfig={{ stiffness: 90, damping: 20 }}>
					<h1 class={style.tagline__dynamic}>ICT</h1>
					<h1 class={style.tagline__dynamic}>Shipping</h1>
					<h1 class={style.tagline__dynamic}>Freight Forwarding</h1>
				</TextLoop>
			</div>
		</div>
	</header>
);

export default Header;
