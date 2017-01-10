import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/aboutPage';
import UserContainer from '../components/user/UserContainer';
import TweetContainer from '../components/tweet/TweetContainer';


import {onUsersEnter,onTweetsEnter} from './route_data';


export default (
	<Route path="/" component={App}>
		<IndexRoute  component ={HomePage}/>
		<Route path="profile" component={UserContainer} onEnter={onUsersEnter} />
		<Route path="tweet" component={TweetContainer} onEnter={onTweetsEnter} />
		<Route path ="about" component={AboutPage}/>
	</Route>
);
