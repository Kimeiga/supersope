import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const SongList = () => (

	<header>
		<nav>
			<Link activeClassName={style.active} href="/"><h1>süperşöpe</h1></Link>
			<p>a collection of hakan's favorite music</p>
			<Link activeClassName={style.active} href="/yeah-thats-right"><h3>yeah thats right</h3></Link>
			<Link activeClassName={style.active} href="/wrap-it"><h3>wrap it</h3></Link>
		</nav>
	</header>
);

export default SongList;
