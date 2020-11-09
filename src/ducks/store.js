import {createStore, combineReducers, applyMiddleware} from 'redux'
import PromiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './budgetReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(PromiseMiddleware))