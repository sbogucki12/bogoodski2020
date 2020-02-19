import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import RunLogHome from '../RunLog/RunLogHome';
import Portfolio from '../Portfolio/PortfolioHome';
import Presentations from "../Portfolio/Presentations/Presentations";
import ResumeHome from "../Portfolio/Resume/ResumeHome";
//import BlogHome from "../Blog/BlogHome";

const Routing = props => (
    <Fragment>
        <Switch>
            {/* <Route exact path="/blog">
                <BlogHome />
            </Route> */}
            <Route exact path="/resume">
                <ResumeHome />
            </Route>
            <Route exact path="/presentations">
                <Presentations />
            </Route>
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
            <Route exact path="/runlog">
                <RunLogHome />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home showMenu={props.showMenu} setShowMenu={props.setShowMenu} />
            </Route>
        </Switch>
    </Fragment>)

export default Routing;