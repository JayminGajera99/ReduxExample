import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector} from 'react-redux';
import actions from '../redux/actions';

const Home = props => {
  const number = useSelector(state => state.counterReducer.num);

  const onAdd = () => {
    actions.increment(number);
  };

  const onDec = () => {
    actions.decrement(number);
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
