import React from 'react';
import styles from './LanguageChanger.module.css';
import PropTypes from 'prop-types';

const languageChanger = props => {
    let RUattachedClass = styles["Active"];
    let UAattachedClass = null;

    if (props.UAifClicked) {
        UAattachedClass = styles["Active"];
        RUattachedClass = null;
    }

    return(
        <div className={styles["LanguageChanger"]}>
            <button className={RUattachedClass} disabled={props.RUifClicked} onClick={props.RUclicked}>RU</button>
            <span>|</span>
            <button className={UAattachedClass} disabled={props.UAifClicked} onClick={props.UAclicked}>UA</button>
        </div>
    );
};

languageChanger.propTypes = {
    RUifClicked: PropTypes.bool,
    UAifClicked: PropTypes.bool,
    RUclicked: PropTypes.func,
    UAclicked: PropTypes.func,
    onClick: PropTypes.bool
};

export default languageChanger;