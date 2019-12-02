/* Modules */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

// Containers
import Login from 'containers/Login/Login';
import Register from 'containers/Register/Register';
import Developer from 'containers/Developer/Developer';
import CashbackList from 'containers/CashbackList/CashbackList';

function MyRouter() {
    const logged = localStorage.getItem('logged');

    return (
        <Switch>
            <Route
                exact
                path='/'
                children={() => (
                    <Redirect to="/Login" />
                )}
            />
            <Route exact path="/Login">
                <Login />
            </Route>
            <Route exact path="/Register">
                <Register />
            </Route>
            <Route exact path="/Developer">
                <Developer />
            </Route>
            {logged === 'true'
                ?
                <Route exact path="/CashbackList">
                    <CashbackList />
                </Route>
                :
                <Redirect to="/Login" />
            }
            <Route exact>
                <Redirect to="/Register" />
            </Route>
        </Switch>
    )
}

export default withRouter(MyRouter);
