import {
  RECEIVE_TAGGING_ERRORS,
  RECEIVE_TAGGINGS,
  RECEIVE_TAGGING
} from '../actions/tag_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAGGING_ERRORS:
      return action.errors;
    case RECEIVE_TAGGING:
    case RECEIVE_TAGGINGS:
      return [];
    default:
      return state;
  }
}