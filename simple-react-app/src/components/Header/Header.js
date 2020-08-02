import React from 'react';
import styles from './Header.module.css'
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import PropTypes from 'prop-types';

const header = props => (
    <header className={styles['Header']}>
        <Logo />
        <nav>
            <BurgerIcon sideDrawerClicked={props.sideDrawerClicked} />
            <NavigationItems popular={props.popular}
                             qa={props.qa}
                             enter={props.enter}
                             register={props.register}
                             UAclicked={props.UAclicked}
                             UAifClicked={props.UAifClicked}
                             RUclicked={props.RUclicked}
                             RUifClicked={props.RUifClicked}
                             sideDrawerClicked={props.sideDrawerClicked} 
                             ifShowSide={props.ifShowSide} />
        </nav>
    </header>
);

header.propTypes = {
    popular: PropTypes.string,
    qa: PropTypes.string,
    enter: PropTypes.string,
    register: PropTypes.string,
    UAclicked: PropTypes.func,
    UAifClicked: PropTypes.bool,
    RUclicked: PropTypes.func,
    RUifClicked: PropTypes.bool,
    sideDrawerClicked: PropTypes.func,
    ifShowSide: PropTypes.bool
};

export default header;