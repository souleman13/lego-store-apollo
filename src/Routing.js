/**
 * Created by Douglas on 7/10/2017.
 */

import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Products from './Pages/productDisplay'
import Cart from './Pages/Cart'
import NotFound from './Pages/notFound'


export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)