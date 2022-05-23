import React from 'react';
import Routes from './components/screens/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './components/redux/store/store';

const App = () => {

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Routes />
      </NavigationContainer>
    </Provider>
  );

};

export default App;
