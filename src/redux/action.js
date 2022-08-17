import types from './types';

export function increment(data) {
  console.log('Increment function call', data);
  return {
    type: types.INCREMENT,
    payload: data,
  };
}

export function decrement(data) {
  return {
    type: types.DECREMENT,
    payload: data,
  };
}
