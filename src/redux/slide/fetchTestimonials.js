import {setTestimonials} from './slide.actions';

export default function fetchTestimonials() {
    return dispatch => {
        fetch('https://raw.githubusercontent.com/BiggerCrayonZ/Academy/master/exams/Alfa/assets/page-testimonials.json')
        .then(res => res.json())
        .then(res => {            
            dispatch(setTestimonials(res.slider))
            return res.slider;
            }
        )
    }
}
