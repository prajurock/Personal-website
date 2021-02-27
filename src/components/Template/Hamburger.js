import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Menu from 'react-burger-menu/lib/menus/slide';
import routes from '../../data/routes';

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    function openFunction() {
        return (
            setOpen(!open)
        );
    }
    return (
        <div className='hamburger-container'>
            <nav className="main" id="hambuger-nav">
                <ul>
                    {open ? (<li className='menu close-menu'>
                        <div onClick={openFunction} className="menu-hover">&#10005;</div>
                    </li>) :
                        (<li className='menu open-menu'>
                            <div onClick={openFunction} className="menu-hover">&#9776;</div>
                        </li>)
                    }
                </ul>
            </nav>

            <Menu right isOpen={open}>
                <ul className='hamburger-ul'>
                    {routes.map((r) => (
                        <li key={r.label}>
                            <Link to={r.path} onClick={openFunction}>
                                <h3 className={r.index && 'index-li'}>{r.label}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Menu>
        </div>
    )

};

export default Hamburger;