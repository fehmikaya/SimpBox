import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import ApplianceMain from "./appliance/ApplianceMain";
import HadoopMain from "./hadoop/HadoopMain";
import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="#home">SimpBox</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/#">Dashboard</Nav.Link>
                            <Nav.Link href="/#/appliance">Appliance</Nav.Link>
                            <Nav.Link href="/#/hadoop">Hadoop</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                    <div className="content">
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/appliance" component={ApplianceMain} />
                        <Route path="/hadoop" component={HadoopMain} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;