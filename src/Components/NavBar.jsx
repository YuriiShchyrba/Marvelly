import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className='navbar'>
            <ul className="navbar_menu">
                <li>
                    <NavLink className={'links'} to={"/profile"} style={{ textDecoration: 'none' }}>Home Page</NavLink>
                </li>
                <li>
                    <NavLink className={'links'} to={"/messages"} style={{ textDecoration: 'none' }}>Messages</NavLink>
                </li>
                <li>
                    <NavLink className={'links'} to={"/friends"} style={{ textDecoration: 'none' }}>Friends</NavLink>
                </li>
                <li>
                    <NavLink className={'links'} to={"/allheroes"} style={{ textDecoration: 'none' }}>All heroes</NavLink>
                </li>
                <li>
                    <NavLink className={'links'} to={"/groups"} style={{ textDecoration: 'none' }}>Your groups</NavLink>
                </li>
                <li>
                    <NavLink className={'links'} to={"/allusers"} style={{ textDecoration: 'none' }}>All users</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;