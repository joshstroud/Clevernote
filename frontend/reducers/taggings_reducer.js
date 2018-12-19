import merge from 'lodash/merge';

import {
  RECEIVE_TAGGINGS,
  RECEIVE_TAGGING,
  DELETE_TAGGING
} from '../actions/tag_actions';

const taggingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAGGINGS:
      return merge({}, state, action.taggings)
    case RECEIVE_TAGGING:
      return merge({}, state, {
        [action.tagging.id]: action.tagging
      })
    case DELETE_TAGGING:
      let newState = merge({}, state);
      delete newState[action.taggingId];
      return newState;
    default:
      return state;
  }
};

export default taggingsReducer;