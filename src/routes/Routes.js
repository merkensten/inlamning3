import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'

export const Routes = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/signin" component={SignInView} />
                <Route component={HomeView} />
            </Switch>
            
        </Router>
    )
}
