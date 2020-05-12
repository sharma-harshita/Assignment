import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Question1 from './components/Question1'
import Question2 from './components/Question2';
import {NavLink} from 'react-router-dom'

function Main(){
    const activeStyle = {color:"#F15B2A"}

    return (
        <div className="App">
            <h1>Assignment</h1>
            <NavLink to="question1" activeStyle={activeStyle} >Question 1</NavLink>
            <div/>
            <NavLink to="question2" activeStyle={activeStyle} >Question 2</NavLink>
            <Switch>
                <Route path="/question1" component={Question1} />
                <Route path="/question2" component={Question2} />
            </Switch>
        </div>
    )
}

export default Main