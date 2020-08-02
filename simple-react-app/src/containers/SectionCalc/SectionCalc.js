import React, { Component } from 'react';
import styles from './SectionCalc.module.css';
import CalcItems from '../../components/CalcItems/CalcItems';
import PropTypes from 'prop-types';
import item1 from '../../assets/images/item-1.jpg';
import item2 from '../../assets/images/item-2.jpg';
import item3 from '../../assets/images/item-3.jpg';
import item4 from '../../assets/images/item-4.jpg';

class SectionCalc extends Component {
    state = {
        items: [
            { img: item1, weight: 'до 0.5 кг', priceIncome: '2.90 £', priceOutcome: '≈99 грн' },
            { img: item2, weight: '1 кг', priceIncome: '5.80 £', priceOutcome: '≈199 грн' },
            { img: item3, weight: '1.5 кг', priceIncome: '8.70 £', priceOutcome: '≈297 грн' },
            { img: item4, weight: '2 кг', priceIncome: '11.60 £', priceOutcome: '≈396 грн' }
        ]
    }

    priceChangeHandler = e => {
        const newState = {
            ...this.state
        };

        if (e.target.value === 'Великобритания' || e.target.value === 'Великобританiя' ) {
            const newIncome1 = newState.items[0].priceIncome = '2.90 £';
            const newOutcome1 = newState.items[0].priceOutcome = '≈99 грн';
    
            const newIncome2 = newState.items[1].priceIncome = '5.80 £';
            const newOutcome2 = newState.items[1].priceOutcome = '≈199 грн';
    
            const newIncome3 = newState.items[2].priceIncome = '8.70 £';
            const newOutcome3 = newState.items[2].priceOutcome = '≈297 грн';
    
            const newIncome4 = newState.items[3].priceIncome = '11.60 £';
            const newOutcome4 = newState.items[3].priceOutcome = '≈396 грн';

            this.setState({
                items: [
                    { img: item1, weight: 'до 0.5 кг', priceIncome: newIncome1, priceOutcome: newOutcome1 },
                    { img: item2, weight: '1 кг', priceIncome: newIncome2, priceOutcome: newOutcome2 },
                    { img: item3, weight: '1.5 кг', priceIncome: newIncome3, priceOutcome: newOutcome3 },
                    { img: item4, weight: '2 кг', priceIncome: newIncome4, priceOutcome: newOutcome4 }
                ]
            });

        } else if (e.target.value === 'Польша' || e.target.value === 'Польща') {

            const newIncome1 = newState.items[0].priceIncome = '2.90 €';
            const newOutcome1 = newState.items[0].priceOutcome = '≈88 грн';
    
            const newIncome2 = newState.items[1].priceIncome = '5.80 €';
            const newOutcome2 = newState.items[1].priceOutcome = '≈175 грн';
    
            const newIncome3 = newState.items[2].priceIncome = '8.70 €';
            const newOutcome3 = newState.items[2].priceOutcome = '≈263 грн';
    
            const newIncome4 = newState.items[3].priceIncome = '11.60 €';
            const newOutcome4 = newState.items[3].priceOutcome = '≈351 грн';

            this.setState({
                items: [
                    { img: item1, weight: 'до 0.5 кг', priceIncome: newIncome1, priceOutcome: newOutcome1 },
                    { img: item2, weight: '1 кг', priceIncome: newIncome2, priceOutcome: newOutcome2 },
                    { img: item3, weight: '1.5 кг', priceIncome: newIncome3, priceOutcome: newOutcome3 },
                    { img: item4, weight: '2 кг', priceIncome: newIncome4, priceOutcome: newOutcome4 }
                ]
            });

        } else if (e.target.value === 'США') {

            const newIncome1 = newState.items[0].priceIncome = '3.90 $';
            const newOutcome1 = newState.items[0].priceOutcome = '≈108 грн';
    
            const newIncome2 = newState.items[1].priceIncome = '7.80 $';
            const newOutcome2 = newState.items[1].priceOutcome = '≈216 грн';
    
            const newIncome3 = newState.items[2].priceIncome = '11.70 $';
            const newOutcome3 = newState.items[2].priceOutcome = '≈323 грн';
    
            const newIncome4 = newState.items[3].priceIncome = '15.60 $';
            const newOutcome4 = newState.items[3].priceOutcome = '≈431 грн';

            this.setState({
                items: [
                    { img: item1, weight: 'до 0.5 кг', priceIncome: newIncome1, priceOutcome: newOutcome1 },
                    { img: item2, weight: '1 кг', priceIncome: newIncome2, priceOutcome: newOutcome2 },
                    { img: item3, weight: '1.5 кг', priceIncome: newIncome3, priceOutcome: newOutcome3 },
                    { img: item4, weight: '2 кг', priceIncome: newIncome4, priceOutcome: newOutcome4 }
                ]
            });
        } else if (e.target.value === 'Китай') {

            const newIncome1 = newState.items[0].priceIncome = '6.00 $';
            const newOutcome1 = newState.items[0].priceOutcome = '≈166 грн';
    
            const newIncome2 = newState.items[1].priceIncome = '12.00 $';
            const newOutcome2 = newState.items[1].priceOutcome = '≈332 грн';
    
            const newIncome3 = newState.items[2].priceIncome = '18.00 $';
            const newOutcome3 = newState.items[2].priceOutcome = '≈497 грн';
    
            const newIncome4 = newState.items[3].priceIncome = '24.00 $';
            const newOutcome4 = newState.items[3].priceOutcome = '≈663 грн';

            this.setState({
                items: [
                    { img: item1, weight: 'до 0.5 кг', priceIncome: newIncome1, priceOutcome: newOutcome1 },
                    { img: item2, weight: '1 кг', priceIncome: newIncome2, priceOutcome: newOutcome2 },
                    { img: item3, weight: '1.5 кг', priceIncome: newIncome3, priceOutcome: newOutcome3 },
                    { img: item4, weight: '2 кг', priceIncome: newIncome4, priceOutcome: newOutcome4 }
                ]
            });
        };
    }

    render() {
        return (
            <section className={styles["SectionCalc"]}>
                <h1> 
                    <span>{this.props.example}</span>
                    <span>
                        <select onChange={this.priceChangeHandler}>
                            <option>{this.props.UK}</option>
                            <option>{this.props.PO}</option>
                            <option>США</option>
                            <option>Китай</option>
                        </select>
                    </span>
                </h1>
                <p>{this.props.delivery}</p>
                <CalcItems items={this.state.items} />
            </section>
        );
    }
};

SectionCalc.propTypes = {
    UK: PropTypes.string,
    PO: PropTypes.string,
    example: PropTypes.string,
    delivery: PropTypes.string
};

export default SectionCalc;