import { createStackNavigator } from '@react-navigation/stack';
import Login from '../login/login';
import Home from '../home/home';

const RootStack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
};

export default function Routes() {
    return (
        <RootStack.Navigator initialRouteName="Login">
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Home" component={Home} />
        </RootStack.Navigator>
  );
}