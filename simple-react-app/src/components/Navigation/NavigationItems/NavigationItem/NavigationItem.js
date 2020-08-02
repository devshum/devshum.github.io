import React from 'react';
import styles from './NavigationItem.module.css';
import PropTypes from 'prop-types';

const navigationItem = props => (
        <li className={styles["NavigationItem"]}>
            <a href="/">
                { props.children }
            </a>
        </li>
);

navigationItem.propTypes = {
    children: PropTypes.string
};

export default navigationItem;