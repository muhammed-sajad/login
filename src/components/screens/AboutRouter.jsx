import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import AboutSingle from './AboutSingle';

function AboutRouter() {
    return (
        <>
         <h1>About Side Menu</h1>
            <Switch>
                <Route exact path='/about/' component={About} />
                <Route path='/about/:id/' component={AboutSingle} />
            </Switch>
        </>
    )
}

export default AboutRouter;
