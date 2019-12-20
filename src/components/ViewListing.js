import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {ImageButton} from './common/ImageButton';
import {Button} from './common/Button';
import {TexInput} from './common';
import {connect} from 'react-redux';
import {
  propertyPriceChange,
  propertyAddressChange,
  propertyNameChange,
} from '../actions';

import ImagePicker from 'react-native-image-picker';

class ViewListing extends Component {
  state = {
    photo: null,
  };

  onNameChange(text) {
    this.props.propertyNameChange(text);
  }

  onAddressChange(text) {
    this.props.propertyAddressChange(text);
  }

  onPriceChange(text) {
    this.props.propertyPriceChange(text);
  }

  choosePhoto = () => {
    const options = {noData: true};
    ImagePicker.launchImageLibrary(options, response => {
      console.log(response);
      //get the image URI
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  capturePhoto = () => {
    const options = {noData: true};
    ImagePicker.launchCamera(options, response => {
      console.log(response);
      //get the image URI
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  render() {
    return (
      <ScrollView>
        {/* this is the view for the top row */}
        <View style={styles.topView}>
          <Text style={styles.propertyImageHead}>Property Images</Text>
          <Text style={{color: 'red', flex: 1}}>DELETE</Text>
        </View>

        {/* this is the view  for the box to hold images */}
        <View style={styles.imageSelector}>
          <View style={styles.imageHolder}>
            {this.state.photo && (
              <Image
                source={{uri: this.state.photo.uri}}
                resizeMode="center"
                style={{height: '100%'}}
              />
            )}
          </View>

          <View style={styles.buttonHolder}>
            <ImageButton
              imageSrc="cameraIcon"
              onPress={this.capturePhoto.bind(this)}>
              TAKE A PHOTO
            </ImageButton>

            <ImageButton
              imageSrc="galleryIcon"
              onPress={this.choosePhoto.bind(this)}>
              CHOOSE A PHOTO
            </ImageButton>
          </View>
        </View>

        {/* this is the view for property details header*/}
        <View style={styles.topView}>
          <Text style={styles.propertyImageHead}>Property Details</Text>
        </View>

        {/* this is the view  for the actual details*/}
        <View style={styles.imageSelector}>
          <View style={styles.detailHolder}>
            <TexInput
              label="Name"
              placeholder="Comfortable bachelor apartment"
              onChangeText={this.onNameChange.bind(this)}
              value={this.props.name}
            />

            <TexInput
              label="Address"
              placeholder="21 Jump Street, 7744"
              onChangeText={this.onAddressChange.bind(this)}
              value={this.props.address}
            />

            <TexInput
              label="Price"
              placeholder="R500 000"
              onChangeText={this.onPriceChange.bind(this)}
              value={this.props.price}
            />
          </View>
        </View>

        <View style={styles.buttonHolder}>
          <Button>CANCEL</Button>
          <Button>SUBMIT</Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  topView: {
    paddingTop: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  propertyImageHead: {
    fontSize: 24,
    fontWeight: 'bold',
    flex:3,
  },

  imageSelector: {
    borderRadius: 5,
    borderColor: 'royalblue',
    borderWidth: 1,
    margin: 15,
    height: 250,
    flexDirection: 'column',
  },

  imageHolder: {
    flex: 3,
  },

  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 15,
    paddingTop: 15,
  },

  detailHolder: {
    flex: 3,
    justifyContent: 'center',
  },
};

//allows tou to send state as a prop
const mapStateToProps = state => {
  return {
    name: state.property.name,
    address: state.property.address,
    price: state.property.price,
  };
};

export default connect(
  mapStateToProps,
  {propertyNameChange, propertyPriceChange, propertyAddressChange},
)(ViewListing);