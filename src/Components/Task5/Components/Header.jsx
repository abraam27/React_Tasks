import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css'
const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/users/add">Add User</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;