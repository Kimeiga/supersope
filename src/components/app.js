import { h, Component } from 'preact';
import { Router } from 'preact-router';

import SongList from './song-list';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Song from '../routes/song';
import Song2 from '../routes/song-2';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	alertA = () => {
		alert('a');
	};

	setActiveTab(e) {
		console.log(e.target);
	};

	clickPlay() {
		// document.getElementsByClassName("playButton medium")[0].click();
		// document.getElementsByClassName("playButton")[0].click();
		document.getElementById("soundcloudy").contentWindow.document.body.getElementByClassName("playButton").click();
	};

	render() {
		return (
			<div id="app">
				<SongList />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Song path="/yeah-thats-right"></Song>
					<Song2 path="/wrap-it"></Song2>
					{/* <Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" /> */}
				</Router>

				{/* <div class="container">
					<h1><a href='javascript:void(0)' onClick={this.clickPlay}>süperşöpe</a></h1>
					<p> <a href="#">a collection of hakan's favorite music</a></p>
					<h1><a href="#">muzik 1</a></h1>
					<h1><a href="#">muzik 2</a></h1>
				</div> */}

				{/* <iframe id="soundcloudy" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/287161495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> */}

				{/* <iframe width="0" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/287161495&color=%23ff00c8&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> */}

{/* <iframe width="1" height="1" src="//www.youtube.com/embed/HMCmyy-Fgsg?autoplay=1&amp;loop=1&amp;playlist=HMCmyy-Fgsg" frameborder="0" allowfullscreen=""></iframe> */}


			</div>
		);
	}
}
