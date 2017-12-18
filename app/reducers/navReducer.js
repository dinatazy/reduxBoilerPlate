import AppNavigator from '../navigators/appNavigator'
import { NAVIGATE_HOME } from '../constants/constants'
import { navigate , reset} from '../lib/navigationHelper'

const navReducer = (state, action) => {
    let nextState;
    switch (action.type) {
        case NAVIGATE_HOME:
            console.log('navigate to home')
            nextState = AppNavigator.router.getStateForAction(reset(0,'home'), state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
};

export default navReducer;