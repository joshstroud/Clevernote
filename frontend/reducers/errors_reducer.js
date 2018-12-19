import {
  combineReducers
} from 'redux';

import session from './session_errors_reducer';
import notes from './note_errors_reducer';
import notebooks from './notebook_errors_reducer';
import tags from './tag_errors_reducer';
import taggings from './tagging_errors_reducer';

export default combineReducers({
  session,
  notes,
  notebooks,
  tags,
  taggings
});