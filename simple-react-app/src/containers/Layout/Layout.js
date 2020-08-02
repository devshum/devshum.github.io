import React, { Component } from 'react';
import Aux from '../../hoc/Auxx/Aux';
import Header from '../../components/Header/Header';
import SectionCalc from '../SectionCalc/SectionCalc';

class layout extends Component {
    state = {
        popular: 'Популярные магазины',
        qa: 'Вопросы и ответы',
        enter: 'Войти',
        register: 'Зарегистрироваться',
        example: 'Пример расчета стоимости доставки из',
        UK: 'Великобритания',
        PO: 'Польша',
        delivery: 'Доставка в любое отделение Нова Пошта в Украине включена',
        RUclicked: true,
        UAclicked: false,
        ifShowSide: false
    }

    languageChangeHandelerUA = () => {
        const state = {
            ...this.state
        }

        state.popular = 'Найпопулярнiшi магазини';
        state.qa = 'Питання та вiдповiдi';
        state.enter = 'Увiйти';
        state.register = 'Зареєструватися';
        state.example = 'Приклад розрахунку вартості доставки з';
        state.UK = 'Великобританiя';
        state.PO = 'Польща';
        state.delivery = 'Доставку до будь-якого відділення Нова Пошта в Україні включено';
        state.UAclicked = !state.UAclicked;
        state.RUclicked = !state.RUclicked;

        this.setState({
           popular: state.popular,
           qa: state.qa,
           enter: state.enter,
           register: state.register,
           example: state.example,
           UK: state.UK,
           PO: state.PO,
           delivery: state.delivery,
           UAclicked: state.UAclicked,
           RUclicked: state.RUclicked
        });
    }

    languageChangeHandelerRU = () => {
        const state = {
            ...this.state
        }

        state.popular = 'Популярные магазины';
        state.qa = 'Вопросы и ответы';
        state.enter = 'Войти';
        state.register = 'Зарегистрироваться';
        state.example = 'Пример расчета стоимости доставки из';
        state.UK = 'Великобритания';
        state.PO = 'Польша';
        state.delivery = 'Доставка в любое отделение Нова Пошта в Украине включена';
        state.RUclicked = !state.RUclicked;
        state.UAclicked = !state.UAclicked;

        this.setState({
           popular: state.popular,
           qa: state.qa,
           enter: state.enter,
           register: state.register,
           example: state.example,
           UK: state.UK,
           PO: state.PO,
           delivery: state.delivery,
           RUclicked: state.RUclicked,
           UAclicked: state.UAclicked
        });
    }

    sideDrawerHandler = () => {
        const state = { 
            ...this.state 
        }

        this.setState({ifShowSide: !state.ifShowSide})
    }

    render() {
        return(
            <Aux>
                <Header popular={this.state.popular}
                        qa={this.state.qa}
                        enter={this.state.enter}
                        register={this.state.register} 
                        UAclicked={this.languageChangeHandelerUA}
                        UAifClicked={this.state.UAclicked}
                        RUclicked={this.languageChangeHandelerRU}
                        RUifClicked={this.state.RUclicked} 
                        sideDrawerClicked={this.sideDrawerHandler} 
                        ifShowSide={this.state.ifShowSide} />
                <main>
                    <SectionCalc example={this.state.example}
                                 UK={this.state.UK}
                                 PO={this.state.PO} 
                                 delivery={this.state.delivery} />
                </main>
            </Aux>
        );
    };
};

export default layout;