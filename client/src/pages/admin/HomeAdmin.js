import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import Layout from './layout/Layout';
import Upload1 from './Upload1';
import Upload11 from './UpForm11';
import Inmoney from './inmoney/Inmoney';
import UpForm2 from './inmoney/UpForm2'
import UpForm22 from './inmoney/UpForm22'
import UpForm3 from './inobj/UpForm3';
import UpForm33 from './inobj/UpForm33';
import InObject from './inobj/Inobj';
import InRes from './inres/Inres';
import UpForm4 from './inres/UpForm4';
import UpForm44 from './inres/UpForm44';
import InPlan from './inplan/Inplan';
import UpForm5 from './inplan/UpForm5';
import UpForm55 from './inplan/UpForm55';
import InReso from './inreso/Inreso';
import UpForm6 from './inreso/UpForm6';
import UpForm66 from './inreso/UpForm66';
import InEdu from './inedu/Inedu';
import UpForm7 from './inedu/UpForm7';
import UpForm77 from './inedu/UpForm77';
import InPlace from './inplace/Inplace';
import UpForm8 from './inplace/UpForm8';
import UpForm88 from './inplace/UpForm88';
import InSubj from './insubj/Insubj';
import UpForm9 from './insubj/UpForm9';
import UpForm99 from './insubj/UpForm99';
import InAle from './inale/Inale';
import UpForm10 from './inale/UpForm10';
import UpForm100 from './inale/UpForm100';
import InRul from './inrul/Inrul';
import UpForm11 from './inrul/UpForm11';
import UpForm111 from './inrul/UpForm111';



const HomeAdmin = () => {
    return (
        <div>
            <Router>
            <Layout>
                    <Switch>
                        <Route path="/admin/upload1" exact component= {Upload1} />
                        <Route path="/admin/upload1/upfrom" exact component= {AdminDashboard} />
                        <Route path="/admin/upload1/upfrom2" exact component= {Upload11} />
                        <Route path="/admin/upload2" exact component= {Inmoney} />
                        <Route path="/admin/upload2/upfrom" exact component= {UpForm2} />
                        <Route path="/admin/upload2/upfrom2" exact component= {UpForm22} />
                        <Route path="/admin/upload3" exact component= {InObject} />
                        <Route path="/admin/upload3/upfrom" exact component= {UpForm3} />
                        <Route path="/admin/upload3/upfrom2" exact component= {UpForm33} />
                        <Route path="/admin/upload4" exact component= {InRes} />
                        <Route path="/admin/upload4/upfrom" exact component= {UpForm4} />
                        <Route path="/admin/upload4/upfrom2" exact component= {UpForm44} />
                        <Route path="/admin/upload5" exact component= {InPlan} />
                        <Route path="/admin/upload5/upfrom" exact component= {UpForm5} />
                        <Route path="/admin/upload5/upfrom2" exact component= {UpForm55} />
                        <Route path="/admin/upload6" exact component= {InReso} />
                        <Route path="/admin/upload6/upfrom" exact component= {UpForm6} />
                        <Route path="/admin/upload6/upfrom2" exact component= {UpForm66} />
                        <Route path="/admin/upload7" exact component= {InEdu} />
                        <Route path="/admin/upload7/upfrom" exact component= {UpForm7} />
                        <Route path="/admin/upload7/upfrom2" exact component= {UpForm77} />
                        <Route path="/admin/upload8" exact component= {InPlace} />
                        <Route path="/admin/upload8/upfrom" exact component= {UpForm8} />
                        <Route path="/admin/upload8/upfrom2" exact component= {UpForm88} />
                        <Route path="/admin/upload9" exact component= {InSubj} />
                        <Route path="/admin/upload9/upfrom" exact component= {UpForm9} />
                        <Route path="/admin/upload9/upfrom2" exact component= {UpForm99} />
                        <Route path="/admin/upload10" exact component= {InAle} />
                        <Route path="/admin/upload10/upfrom" exact component= {UpForm10} />
                        <Route path="/admin/upload10/upfrom2" exact component= {UpForm100} />
                        <Route path="/admin/upload11" exact component= {InRul} />
                        <Route path="/admin/upload11/upfrom" exact component= {UpForm11} />
                        <Route path="/admin/upload11/upfrom2" exact component= {UpForm111} />
                    </Switch>
            </Layout>
            </Router>
        </div>
    )
}

export default HomeAdmin
