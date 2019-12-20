import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

const ImageButton = ({onPress, children, imageSrc}) => {
  const {btnStyle, txtStyle} = styles;
  console.log(imageSrc);
  var imagePath;
  if (imageSrc === 'cameraIcon') {
    imagePath = require('../../images/cameraIcon.jpg');
  } else {
    imagePath = require('../../images/galleryIcon.jpg');
  }
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Image source={imagePath} style={styles.ImageIconStyle} />
      <Text style={txtStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  btnStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    backgroundColor: 'royalblue',
    borderRadius: 1,
    borderWidth: 2,
    borderColor: 'royalblue',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
  },

  txtStyle: {
    color: 'white',
    fontSize: 12,

    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
};

export {ImageButton};
