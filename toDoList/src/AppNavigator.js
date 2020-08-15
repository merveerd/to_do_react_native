import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import ToDoDetails from './screen/ToDoDetails';
import ToDoUpdate from './screen/ToDoUpdate';

const Stack = createStackNavigator();
function AppNavigator(props){
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ToDoUpdate" component={ToDoUpdate} />

      <Stack.Screen
        name="ToDoDetails"
        component={ToDoDetails}
        options={({navigation}) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.navigate('Home');}}
            />)
          })}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator