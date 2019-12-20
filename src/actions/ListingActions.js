import {Actions} from 'react-native-router-flux';

import {
  PROPERTY_NAME_CHANGED,
  PROPERTY_PRICE_CHANGED,
  PROPERTY_ADDRESS_CHANGED,
} from './types';

export const createListing = () => {
  Actions.createList();
};

export const editListing = () => {
  Actions.editListing();
};

export const propertyNameChange = text => {
  // action creator that handles user entering text into email
  return {
    type: PROPERTY_NAME_CHANGED,
    payload: text,
  };
};

export const propertyAddressChange = text => {
  // action creator that handles user entering text into address
  return {
    type: PROPERTY_ADDRESS_CHANGED,
    payload: text,
  };
};

export const propertyPriceChange = text => {
  // action creator that handles user entering text into email
  return {
    type: PROPERTY_PRICE_CHANGED,
    payload: text,
  };
};
