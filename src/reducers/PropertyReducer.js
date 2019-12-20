import {
  PROPERTY_CREATED,
  PROPERTY_ADDRESS_CHANGED,
  PROPERTY_NAME_CHANGED,
  PROPERTY_PRICE_CHANGED,
} from '../actions/types';

const INITIAL = {
  name: '',
  address: '',
  price: '',
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case PROPERTY_CREATED:
      return INITIAL;

    case PROPERTY_PRICE_CHANGED:
      return {...state, price: action.payload};

    case PROPERTY_NAME_CHANGED:
      return {...state, name: action.payload};

    case PROPERTY_ADDRESS_CHANGED:
      return {...state, address: action.payload};

    default:
      return state;
  }
};
