import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {increment, decrement} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';

const Home = props => {
  const number = useSelector(state => state.num);
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(increment(number));
  };

  const onDec = () => {
    dispatch(decrement(number));
  };

  return (
    <View style={styles.container}>
      <Text>{number}</Text>

      <Text>Home</Text>

      <Button title="ADD" onPress={onAdd} />

      <Button title="DEC" onPress={onDec} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
