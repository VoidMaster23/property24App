import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import {FloatingActionButton} from 'react-native-floating-action-button';
import {Card} from '../components/common';
import {ActionButton} from '../components/common/ActionButton';
import {Actions} from 'react-native-router-flux';
import {Section} from '../components/common';
//for the floating action button

class Listings extends Component {
  addListing() {
    console.log('pressed');
    Actions.createListing();
  }

  render() {
    return (

      // to change when real data comes in
      <View style={styles.mainStyle}>
        <View style={styles.mainContainer}>
          <TouchableOpacity onPress={Actions.editListing()}>
            <Card>
              <Section>
                <Image
                  source={require('../images/apa.jpg')}
                  style={styles.picStyle}
                  resizeMode="cover"
                />
              </Section>

              <Section>
                <View>
                  <Text style={styles.addressStyle}>3 Conch Street, 1245</Text>
                  <Text style={styles.nameStyle}>3 Bedroom Apartment</Text>
                  <Text>R 1 200 000</Text>
                </View>
              </Section>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonPos}>
          <ActionButton onPress={this.addListing.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonPos: {
    bottom: -350,
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
  },

  mainContainer: {},

  mainStyle: {
    padding: 15,
    flexDirection: 'column',
  },

  picStyle: {
    height: 150,
  },
  addressStyle: {
    fontSize: 24,
  },

  nameStyle: {
    fontWeight: 'bold',
  },
};

export default Listings;
