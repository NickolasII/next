import React from "react";
import { Route, Switch} from "react-router-dom";
import PageMain from "./PageMain";
import PageEquip from "./PageEquip/PageEquip";
import PageTroubles from "./PageTroubles/PageTroubles";

const Content=()=>{
    return (
        <main>
            <Switch>
                <Route exact path='/' component={PageMain}/>
                <Route path='/equipment' component={PageEquip}/>
                <Route path='/troubles' component={PageTroubles}/>
            </Switch>
        </main>
    )
};

export default Content;