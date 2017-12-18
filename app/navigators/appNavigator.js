import LaunchScreen from '../screens/launch'
import { StackNavigator } from 'react-navigation'

export const AppNavigator = StackNavigator(
    {
        launch: {
            screen: LaunchScreen
        },
    },
);

export default AppNavigator;