import LaunchScreen from '../screens/launch'
import HomeScreen from '../screens/home'
import { StackNavigator } from 'react-navigation'

export const AppNavigator = StackNavigator(
    {
        launch: {
            screen: LaunchScreen
        },
        home: {
            screen: HomeScreen,
        }
    },
    {
        initialRouteName:'launch'
    }
);

export default AppNavigator;