import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './navigation/DrawerNavigator';
import PostScreen from './screens/postScreen';
export default class App extends React.Component{
render(){
  return(
      <NavigationContainer>
<DrawerNav/>
  

   </NavigationContainer>
  )
}
}

