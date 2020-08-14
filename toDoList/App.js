/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Flatlist
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style = {styles.title}>{item.name}</Text>
      <Text style = {styles.title}>{item.status}</Text>
    </View>
  )

  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
     
      </SafeAreaView>
    </>
  );
};

const styles = {

}

export default App;
