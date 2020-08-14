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
  TouchableOpacity, Image
} from 'react-native';

import {connect, useDispatch} from 'react-redux';
import {getList} from '../actions'



const Home = (props)=> {

  useEffect(()=> {
    props.getList();
  }, []);

    const renderItem = ({item}) => (
      <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.note}>{item.note}</Text>
      <TouchableOpacity style = {{alignItems: 'space-between'}} onPress = {props.onPress}>
  <Image style={{ width: '15%', height: '50%'}}
              source={require('../images/bin.png')}></Image>
</TouchableOpacity>
    </View>);

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <FlatList
            data={props.todos}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            ListEmptyComponent={() => {//reverse can be added for seeing the newst at the top
              return (
                <View style={{alignItems: 'center', margin: 70}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Please enter any to-do to see what will be going on.
                  </Text>
                </View>
              );
            }}
          />
          <Button title={'Add'}
          onPress = {()=> {props.navigation.navigate('ToDoDetails')}}>

          </Button>
          
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
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  const mapStateToProps = ({todoList}) => {
  
    const {todos,loading, data} = todoList;
    return {todos, loading,data }
  }
  export default connect( mapStateToProps, { getList  } )(Home);
