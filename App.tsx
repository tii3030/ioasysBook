import React from 'react';
import Routes from './components/screens/routes/routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
  );

};

export default App;
