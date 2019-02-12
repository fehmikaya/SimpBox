import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Appliance01 from "./Appliance01"
import Appliance02 from "./Appliance02"
import {Nav} from 'react-bootstrap';

class ApplianceMain extends Component {
    render() {
        return (
            <HashRouter>
                <div style={{ display: "flex" }}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/#/appliance/appliance01" className="Nav_link">Appliance01</Nav.Link>
                        <Nav.Link href="/#/appliance/appliance02" className="Nav_link">Appliance02</Nav.Link>
                    </Nav>
                    <div className="content">
                        <Route path="/appliance/appliance01" component={Appliance01} />
                        <Route path="/appliance/appliance02" component={Appliance02} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default ApplianceMain;