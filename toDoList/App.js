import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, KeyboardAvoidingView } from 'react-native';

const DATA = [
  
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
       <KeyboardAvoidingView
       behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => {
          return (
            <View style={{alignItems: 'center', margin: 70}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Please enter any to-do to see what is going on.
              </Text>
              
            </View>
          );
        }}
      />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
