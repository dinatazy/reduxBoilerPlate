import { combineReducers } from 'redux'
import appData from './dataReducer'
import navReducer from './navReducer'

const rootReducer = combineReducers({
    appData,
    nav:navReducer
})

export default rootReducer
