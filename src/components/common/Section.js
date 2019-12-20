import React from 'react';
import {View} from 'react-native';

const Section = props => {
  //style to the right overwrites the one on the left
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    padding: 5,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: 'black',
    position: 'relative',
  },
};

export {Section};
