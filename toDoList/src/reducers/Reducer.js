import {
  SET_LIST,
  LOADING_END,
  LOADING_START,
  UPDATE_LIST,
  REMOVE_TODO,
  UPDATE_TODO,
  ADD_LIST_LOCAL,
  //  KEEP_ID
} from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  key: 0,
  todos: [],
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: action.payload,
      };

    case LOADING_END:
      return {
        ...state,
        loading: action.payload,
      };

    // case KEEP_ID:

    // let count = state.key;
    // count++
    //   return {
    //     ...state,
    //    key: count,
    //   };

    case UPDATE_LIST:
      const obj = action.payload;
      let arr = state.todos.slice();
      arr.push(obj);
      console.log('update list', arr);
      AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arr));

      return {
        ...state,
        todos: arr,
      };

    case REMOVE_TODO:
      const removedObj = action.payload.item;

      let arrRemove = state.todos.slice();

      let removingIndex = arrRemove.findIndex((item) => removedObj === item);

      removingIndex !== -1 && arrRemove.splice(removingIndex, 1);

      AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arrRemove));
      //  arrRemove.indexOf(removedObj) !== -1 && arrRemove.splice(arrRemove.indexOf(removedObj), 1);
      return {
        ...state,
        todos: arrRemove,
      };

    case UPDATE_TODO:
      const updatingObj = action.payload;

      let arrUpdating = state.todos.slice();

      let updatingIndex = arrUpdating.findIndex(
        (item) => updatingObj.key === item.key,
      );

      if (updatingIndex !== -1) {
        console.log('updating');
        arrUpdating.splice(removingIndex, 1, updatingObj);
      }

      AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arrUpdating));
      console.log('updated local', AsyncStorage.getItem(ADD_LIST_LOCAL) )
      //  arrUpdating.indexOf(updatingObj) !== -1 && arrUpdating.splice(arrUpdating.indexOf(updatingObj), 1);
      return {
        ...state,
        todos: arrRemove,
      };
    case SET_LIST:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
