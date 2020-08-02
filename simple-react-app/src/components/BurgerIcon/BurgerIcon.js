import React from 'react';
import styles from './BurgerIcon.module.css';
import PropTypes from 'prop-types';

const burgerIcon = props => (
    <div className={styles["BurgerIcon"]} onClick={props.sideDrawerClicked}><span>&nbsp;</span></div>
);

burgerIcon.propTypes = {
    onClick: PropTypes.func
};

export default burgerIcon;

