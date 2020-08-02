import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types'

const backdrop = props => (
    props.show ? <div className={styles["Backdrop"]} onClick={props.sideDrawerClicked}>&nbsp;</div> : null
);

backdrop.propTypes = {
    onClick: PropTypes.func
};

export default backdrop;