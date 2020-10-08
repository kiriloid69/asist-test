import React, {Component} from 'react';
import '../App.css'

import {BrowserRouter as Router, Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Router>
                {/* <Link to="/">Posts</Link> */}
                <ul className="Navigation">
                    <li>
                        <Link to="/">Posts</Link>
                    </li>
                    <li>
                        <Link to="/photos">Photos</Link>
                    </li>
                    <li>
                        <Link to="/albums">Albums</Link>
                    </li>
                </ul>
            </Router>
        );
    }
}
