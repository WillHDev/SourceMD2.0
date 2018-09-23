import React from 'react';
import {
    Router,
    Route,
   browserHistory,
    IndexRoute
} from 'react-router';
// import { Meteor } from 'meteor/meteor';
// import {
//     BrowserRouter as Router,
//     Route,
//    browserHistory,
//     IndexRoute
// } from 'react-router-dom';
import { render }  from 'react-dom';
import App  from './App';
import MainLayout from './layouts/MainLayout';

Meteor.startup(() => {
    render(
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute  component={App} />
            </Route>
    </Router>, 
    document.getElementById('render-target')
    );
  });
  
//history={browserHistory}