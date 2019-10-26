import {setConfiguration} from './configurator.actions';

export default function fetchConfigurators() {
    return dispatch => {
        fetch('https://raw.githubusercontent.com/BiggerCrayonZ/Academy/master/exams/Alfa/assets/page-configurator.json')
        .then(res => res.json())
        .then(res => {            
            dispatch(setConfiguration(res.calculator))
            return res.calculator;
            }
        )
    }
}