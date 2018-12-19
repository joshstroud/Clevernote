import {
  RECEIVE_TAG_ERRORS,
  RECEIVE_TAGS,
  RECEIVE_TAG
} from '../actions/tag_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAG_ERRORS:
      return action.errors;
    case RECEIVE_TAG:
    case RECEIVE_TAGS:
      return [];
    default:
      return state;
  }
}