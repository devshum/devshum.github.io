import React from 'react';

const calcItem = props => (
    <li>
        <img src={props.img} alt="item-1 img"/>
        <h2>
            <span>{props.weight}</span>
            <span>{props.priceIncome}</span>
        </h2>
        <p>{props.priceOutcome}</p>
    </li>
);

export default calcItem;