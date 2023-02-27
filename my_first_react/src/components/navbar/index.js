import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/counter" activeStyle>
                        Counter
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar