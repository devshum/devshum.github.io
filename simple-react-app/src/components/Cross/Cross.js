import React from 'react';
import styles from './Cross.module.css';
import PropTypes from 'prop-types';

const cross = props => (
    <div className = {styles["Cross"]} onClick={props.sideDrawerClicked}>&times;</div>
);

cross.propTypes = {
    onClick: PropTypes.func
};

export default cross;