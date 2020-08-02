import React from 'react';
import styles from './CalcItems.module.css';
import CalcItem from './CalcItem/CalcItem';
import PropTypes from 'prop-types';

const calcItems = props => {
    const items = props.items;
    return (
        <ul className={styles["CalcItems"]}>
            {items.map(el => {
                return <CalcItem img={el.img}
                                 weight={el.weight} 
                                 priceIncome={el.priceIncome} 
                                 priceOutcome={el.priceOutcome} 
                                 key={el.weight} />
            })}
        </ul>
    );
};

calcItems.propTypes = {
    img: PropTypes.string, 
    weight: PropTypes.string, 
    priceIncome: PropTypes.string, 
    priceOutcome: PropTypes.string, 
};

export default calcItems;