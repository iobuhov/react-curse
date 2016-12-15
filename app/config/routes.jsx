import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import React from 'react'
import Main  from '../components/Main.jsx'
import Home  from '../components/Home.jsx'
import PromptContainer from '../containers/PromptContainer.jsx'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer.jsx'
import HomeContainer from '../containers/homeContainer.jsx'
import config from './auth'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ HomeContainer }/>
      <Route path='playerOne' header='Player One' component={PromptContainer}/>
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
      <Route path='battle' component={ ConfirmBattleContainer } />
    </Route>
  </Router>
);
