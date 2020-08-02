import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';
import Button from '../../UI/Button/Button';
import LanguageChanger from '../../LanguageChanger/LanguageChanger';
import Backdrop from '../../UI/Backdrop/Backdrop'
import PropTypes from 'prop-types';
import Cross from '../../Cross/Cross';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

const navigationItems = props => {
    let attachedClasses = [styles["NavigationItems"], styles["Close"]];

    if (props.ifShowSide) {
        attachedClasses = [styles["NavigationItems"], styles["Open"]];
    }

    return(
        <Auxiliary>
            <Backdrop show={props.ifShowSide} sideDrawerClicked={props.sideDrawerClicked} />
            <ul className={attachedClasses.join(' ')}>
                <Cross sideDrawerClicked={props.sideDrawerClicked} />
                <NavigationItem>{props.popular}</NavigationItem>
                <NavigationItem>{props.qa}</NavigationItem>
                <LanguageChanger 
                    UAclicked={props.UAclicked}
                    UAifClicked={props.UAifClicked}
                    RUclicked={props.RUclicked}
                    RUifClicked={props.RUifClicked} />
                <NavigationItem>{props.enter}</NavigationItem>
                <Button>{props.register}</Button>
            </ul>
        </Auxiliary>
    );
};

navigationItems.propTypes = {
    popular: PropTypes.string,
    qa: PropTypes.string,
    enter: PropTypes.string,
    register: PropTypes.string,
    RUclicked: PropTypes.func,
    UAclicked: PropTypes.func,
    UAifClicked: PropTypes.bool,
    RUifClicked: PropTypes.bool,
};

export default navigationItems;

