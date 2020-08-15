import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {connect} from 'react-redux';
import {getList, removeTodo} from '../actions';

const Home = (props) => {
  useEffect(() => {
    props.getList();
    console.log('home');
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity onPress = {()=> { 
       
        props.navigation.navigate('ToDoUpdate', {
          title: item.title,
          note: item.note,
          key : item.key
        })}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.note}>{item.note}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{alignItems: 'space-between', alignSelf: 'flex-end' }}
        onPress={() => {
          Alert.alert(
            'Permission',
            'Are you sure you want to delete it?',
            [
              {
                text: 'Cancel',
                onPress: () => {},
              },
              {text: 'OK', onPress: () => props.removeTodo({item})},
            ],
            {cancelable: false},
          );
        }}>
        <Image
          style={{width: 40, height: 60}}
          source={require('../images/bin.png')}></Image>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <FlatList
          data={props.todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.title} // keyExtractor={(item, index) => `${index}`}
          ListEmptyComponent={() => {
            //reverse can be added for seeing the newst at the top
            return (
              <View style={{alignItems: 'center', margin: 30}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Please enter any to-do to see what will be going on.
                </Text>
              </View>
            );
          }}
        />
        <Button
          title={'Add'}
          onPress={() => {
            props.navigation.navigate('ToDoDetails');
          }}></Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  note: {},
});

const mapStateToProps = ({todoList}) => {
  const {todos, loading, data} = todoList;
  return {todos, loading, data};
};
export default connect(mapStateToProps, {getList, removeTodo})(Home);
