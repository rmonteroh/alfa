const INITIAL_STATE = {
    testimonials: null
}

const slideReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_TESTIMONIALS' :            
            return {
                ...state,
                testimonials: action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}

export default slideReducer;

export const getTestimonials = state => state.slide.testimonials