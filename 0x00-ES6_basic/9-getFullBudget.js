import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
    const budget = getBudetObject(income, gdp, capita);
    cont fullBudget = {
        ...budget, 
        getIncomeInDollars(income) {
            return `$$income}`;
        },
        getIncomeInEuro(income) {
            return `${income} euros`;
        },
    };
        return fullBudget;
}
