import {
  combineReducers
} from 'redux';

import users from './users_reducer';
import notes from './notes_reducer';
import notebooks from './notebooks_reducer';
import tags from './tags_reducer';
import taggings from './taggings_reducer';

export default combineReducers({
  users,
  notes,
  notebooks,
  tags,
  taggings
});