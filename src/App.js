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
            <MenuBar>
                <MenuImage src={require('./assets/images/menu-bar.png').default} alt="Image"/>
                <LeftDiv>
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
                </LeftDiv>
            </MenuBar>
            <Nav>
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
            </Nav>
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

const MenuBar = Styled.div`
    display: none;
    @media all and (max-width: 460px) {
        display: block;
        height: 50px;
        width: 40px;
    }
`;
const LeftDiv = Styled.div`
    
    width: 200px;
`;

const MenuImage = Styled.img`
    height: 100%;
    width: 100%;
`;
const Nav = Styled.nav`
    @media all and (max-width: 460px) {
        display: none;
    }
`;
const Ul = Styled.ul`
    background: #777;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media all and (max-width: 460px) {
        // display: inline-block;
        flex-direction: column;
        height: calc(100vh - 70px);
        align-items: flex-start;
        margin: 0;
        padding: 0;
        justify-content: start;
        background: #fff;
    }
    
`;
const Li = Styled.li`
    list-style: none;
    margin-right: 50px;
    @media all and (max-width: 460px) {
        margin-bottom: 40px;
        border-bottom: 1px solid #fff;
    }
`;
const Pass = Styled(Link)`
    text-decoration: none;
    color: #fff;
    @media all and (max-width: 460px) {
        color: #000;
    }
`;