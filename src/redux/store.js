import {createStore} from 'redux';
import { combineReducers } from 'redux';
import homeReducer from './reducers/homeReducer';
import viewOfferingsReducer from './reducers/offeringsReducer'

const rootReducer = combineReducers ({
    homeReducer: homeReducer,
    viewOfferings: viewOfferingsReducer
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;