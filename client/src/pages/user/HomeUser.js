import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './homeuser.css';
import User from './User';
import Sidebar from '../../components/UserComponent/Sidebar/SideBars';
import UserSide from './UserSide';
import HeaderTop from '../../components/UserComponent/Header/HeaderTop';
import Layout from '../../layout/Layout';
import inmoney from './inmoney/Inmoney';
import inobj from './inobj/Inobj'
import inres from './inres/Inres';
import inplan from './inplan/Inplan';
import inreso from './inreso/Inreso';
import inedu from './inedu/Inedu';
import inplace from './inplace/Inplace';
import insubj from './insubj/Insubj';
import inale from './inale/Inale';
import inrul from './inrul/Inrul';



const HomeUser = () => {
    return (
       <div>
        <Router>
        <Layout>
        <Switch>
          <Route path="/search" exact component= {User} />
          <Route path="/search1" exact component= {UserSide} />
          <Route path="/search2" exact component= {inmoney} />
          <Route path="/search3" exact component= {inobj} />
          <Route path="/search4" exact component= {inres} />
          <Route path="/search5" exact component= {inplan} />
          <Route path="/search6" exact component= {inreso} />
          <Route path="/search7" exact component= {inedu} />
          <Route path="/search8" exact component= {inplace} />
          <Route path="/search9" exact component= {insubj} />
          <Route path="/search10" exact component= {inale} />
          <Route path="/search11" exact component= {inrul} />
        </Switch>
        </Layout>
      </Router>
      </div>
    )
}

export default HomeUser
