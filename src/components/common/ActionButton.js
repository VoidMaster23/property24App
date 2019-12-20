import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ActionButton = ({onPress}) => {
  return (
    <View >
      <TouchableOpacity onPress={onPress} style={styles.fab}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    height: 50,
    width: 50,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3454B4',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});

export {ActionButton};
