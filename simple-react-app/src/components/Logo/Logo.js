import React from 'react';
import img from '../../assets/images/logo.png';
import styles from './Logo.module.css'

const logo = () => (
    <img className={styles["Logo"]} src={img} alt="NP Shopping logo" />
);

export default logo;