
const INITIAL_STATE = {
    nav: []
}

const navReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_NAV' :
            return {
                ...state,
                nav: action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}

export default navReducer;

export const getNav = state => state.nav;