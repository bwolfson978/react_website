import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import InterestsPage from "./pages/InterestsPage"
import IntroPage from "./pages/IntroPage"
import InvolvementPage from "./pages/InvolvementPage"
import ProjectsPage from "./pages/ProjectsPage"
import SkillsPage from "./pages/SkillsPage"
import TeachingPage from "./pages/TeachingPage"


const app = document.getElementById('app');
ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Route path="intro" component={IntroPage}></Route>
			<Route path="projects" component={ProjectsPage}></Route>
			<Route path="teaching" component={TeachingPage}></Route>
			<Route path="involvement" component={InvolvementPage}></Route>
			<Route path="skills" component={SkillsPage}></Route>
			<Route path="interests" component={InterestsPage}></Route>
		</Route>
	</Router>, app);