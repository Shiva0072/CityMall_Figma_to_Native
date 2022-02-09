import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

// import Navbar_field from './components/Navbar_field';
import FeedScreen from './screens/FeedScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* <Navbar_field /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 30,
    // padding: 60,
    // backgroundColor: 'black',
    // width: '100%',
    // height: '100%',
  },
});

export default App;
