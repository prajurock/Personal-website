import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/Template/Navigation';
import PropTypes from 'prop-types';
import React from 'react'
import SideBar from '../components/Template/SideBar'

const Main = (props) => (
    <HelmetProvider>
        <Helmet titleTemplate="%s | Prajwal kumar Singh" defaultTitle='Prajwal Kumar Singh'>
            {props.title && <title>{props.title}</title>}
            <meta name="description" content={props.description} />
        </Helmet>
        <div id="wrapper">
            <Navigation />
            <div id="main">
                {props.children}
            </div>
            {props.fullPage ? null : <SideBar />}
        </div>

    </HelmetProvider>
);

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: " Prajwal's personal website.",
};


export default Main;

