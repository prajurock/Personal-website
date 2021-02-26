import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/Template/Navigation';
import PropTypes from 'prop-types';
import React from 'react'

const Main = (props) => (
    <HelmetProvider>
    <Navigation/>
        {props.description}
    </HelmetProvider>
);


export default Main;

