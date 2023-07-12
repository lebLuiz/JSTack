import React from 'react';
import {
	BrowserRouter,
	Link,
} from 'react-router-dom';

import Header from '../Header';
// import Footer from '../Footer';

import Routes from '../../Routes';

import { Nav } from './style';

export default function Layout() {
	return (
		<BrowserRouter>
			<Header />
			
			<Nav>
				<Link to="/">Home</Link>
				<Link to="/posts">Posts</Link>
				<Link to="/posts/123456">Post</Link>
			</Nav>

			<Routes />
			{/* <Footer /> */}
		</BrowserRouter>
	);
}
