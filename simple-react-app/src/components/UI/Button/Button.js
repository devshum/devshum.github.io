import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const button = props => (
    <button className={styles["Button"]}>{props.children}</button>
);

button.propTypes = {
    children: PropTypes.string
};

export default button;