import Hamburger from './Hamburger'
import { Link } from 'react-router-dom';
import React from 'react'
import routes from "../../data/routes"

const Navigation = () => (
    <header id="header">
        <h1 className="index-link">
            {routes.filter((r) => r.index).map((r) => (
                <Link key={r.label} to={r.path}>{r.label}</Link>
            ))}
        </h1>
        <nav className='links'>
            <ul>
                {routes.filter((l) => !l.index).map((r) => {
                        return (
                            <li key={r.label}>
                                <Link to={r.path}>{r.label}</Link>
                            </li>
                        )
                    })
                }

            </ul>
        </nav>
        <Hamburger />
    </header>

);

export default Navigation;
