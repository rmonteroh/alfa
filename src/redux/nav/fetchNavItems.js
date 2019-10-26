import {setNav} from './nav.actions';

export default function fetchNavItems() {
    return dispatch => {
        fetch('https://raw.githubusercontent.com/BiggerCrayonZ/Academy/master/exams/Alfa/assets/app.json')
        .then(res => res.json())
        .then(res => {            
            dispatch(setNav(res.menu.tabs))            
            return res.menu.tabs;
            }
        )
        .catch(error => {
            
        })
    }
}