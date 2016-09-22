import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage"
import InterestsPage from "./pages/InterestsPage"
import InvolvementPage from "./pages/InvolvementPage"
import ProjectsPage from "./pages/ProjectsPage"
import SkillsPage from "./pages/SkillsPage"
import TeachingPage from "./pages/TeachingPage"
/*import VisPage from "./pages/VisPage"*/
import ContactPage from "./pages/ContactPage"


const app = document.getElementById('app');
ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute title="Welcome!" component={HomePage}/>
			<Route path="projects" component={ProjectsPage}/>
			<Route path="teaching" component={TeachingPage}/>
			<Route path="involvement" component={InvolvementPage}/>
			<Route path="skills" component={SkillsPage}/>
			<Route path="contact" component={ContactPage}/>
			{/* <Route path="interests" component={InterestsPage}/> */}
			{/* <Route path="vis" component={VisPage}/> */}

		</Route>
	</Router>, app);