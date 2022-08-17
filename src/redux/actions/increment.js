import types from '../types';
import store from '../store';

const {dispatch} = store;

export function increment(data) {
  console.log('Increment function call', data);
  dispatch({
    type: types.INCREMENT,
    payload: data,
  });
}
