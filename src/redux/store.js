import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise';

import rootReducer from './root-reducer'

const middlewares = [logger, thunk, promise]
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store