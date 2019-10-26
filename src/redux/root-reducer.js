import {combineReducers} from 'redux'

import navReducer from './nav/nav.reducer'
import slideReducer from './slide/slide.reducer'
import configReducer from './configurator/configurator.reducer'

const rootReducer = combineReducers({
    nav:navReducer,
    slide:slideReducer,
    config:configReducer,
});

export default rootReducer;