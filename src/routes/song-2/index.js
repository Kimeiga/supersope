import { h } from 'preact';
import style from './style';

const Song2 = () => (
	<div class={style.song}>
		<h3>now playing</h3>
		<hr></hr>
		<h2>wrap it</h2>
		<p>Rollomatik</p>
		<a href="https://soundcloud.com/rollomatik/rollomatik-wrap-it" target="_blank">original track</a>
		<iframe width="0" height="0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/35574596&color=%23ff00c8&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
	</div>
);

export default Song2;
