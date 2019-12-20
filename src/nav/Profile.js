import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

class Profile extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image
            source={require('../images/estateagent.jpg')}
            style={styles.imgStyle}
            resizeMode="stretch"
          />
          <Text style={styles.nameStyle}>Jean Deaux</Text>

          <Text style={styles.mailStyle}>
            Email: jeandeaux@rawsonproperties.com
          </Text>
          <Text style={styles.mailStyle}>Tel: +27 79 789 7820</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  imgStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    height: 200,
    width: '100%',
  },

  viewStyle: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  nameStyle: {
    fontSize: 36,
    paddingTop: 30,
  },

  mailStyle: {
    color: 'gray',
  },
};
export default Profile;
