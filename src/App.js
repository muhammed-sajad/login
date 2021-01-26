import React from 'react';
import './App.css';
import Styled from 'styled-components'
import Top from './components/screens/Top'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AboutRouter from './components/screens/AboutRouter';
import Users from './components/screens/Users';
import User from './components/screens/User';
// import axios from 'axios';

    function App() {
    return (
        <Router>
            <nav>
                <Ul>
                    <Pass to='/about/'>
                        <Li>About</Li>
                    </Pass>
                    <Pass to='/login/'>
                        <Li>Login</Li>
                    </Pass>
                    <Pass to='/users/'>
                        <Li>Users</Li>
                    </Pass>
                </Ul>
            </nav>
            <Switch>
                <Route exact path='/about/' component={AboutRouter} />
                <Route exact path='/login/' component={Top} />
                <Route exact path='/users/' component={Users} />
                <Route exact path='/user/:id' component={User} />
            </Switch>
        </Router>
    );
}

export default App;

const Ul = Styled.ul`
    background: #777;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Li = Styled.li`
    list-style: none;
    margin-right: 50px;
`;
const Pass = Styled(Link)`
    text-decoration: none;
    color: #fff;
`;