import {calculate} from './util'

const INITIAL_STATE = {
    month: 10,
    full: 1,
    total: calculate(1,10),
    calculator: null
}

const configReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_TOTAL' :
            return {
                ...state,
                total: calculate(state.full,state.month),
            }
            break;
        case 'SET_MONTH' :
            return {
                ...state,
                total : calculate(parseInt(state.full),parseInt(action.payload)),
                month: action.payload,
            }
            break;
        case 'SET_FULL' :
            return {
                ...state,
                total : calculate(parseInt(action.payload),parseInt(state.month)),
                full: action.payload,
            }
            break;
        case 'SET_CONFIGURATION':
            return {
                ...state,
                calculator: action.payload,
            }
            break;
    
        default:
            return state
            break;
    }
}

export default configReducer;

export const getTotal   = state => state.config.total
export const getMonth   = state => state.config.month
export const getFull    = state => state.config.full
export const getCalculator   = state => state.config.calculator