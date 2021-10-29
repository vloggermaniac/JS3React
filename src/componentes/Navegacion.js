import React from "react";
import { NavbarBrand, Nav, NavItem, Navbar} from 'reactstrap';
import Carro from "./Carro";

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar color="light"  light expand="xl">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" Navbar>
                    <NavItem>
                       <Carro/>
                    </NavItem>
                   
                </Nav>
            </Navbar>
        );
    }
}
export default Navegacion;