import * as TagApiUtil from "../util/tag_api_util"

import {
  fetchTags,
  fetchNotesWithTag,
  createTag,
  deleteTag,
  fetchTaggings,
  createTagging,
  deleteTagging,
  receiveTagErrors,
  receiveTaggingErrors
} from "../actions/tag_actions"

export const testTags = (store) => {
  // testTagApiUtil();
  testTagsRedux();
  setupStoreTesting(store);

}

const testTagApiUtil = () => {
  window.fetchTags = TagApiUtil.fetchTags;
  window.fetchNotesWithTag = TagApiUtil.fetchNotesWithTag;
  window.createTag = TagApiUtil.createTag;
  window.deleteTag = TagApiUtil.deleteTag;
  window.fetchTaggings = TagApiUtil.fetchTaggings;
  window.createTagging = TagApiUtil.createTagging;
  window.deleteTagging = TagApiUtil.deleteTagging;
}

const testTagsRedux = () => {
  window.fetchTags = fetchTags;
  window.fetchNotesWithTag = fetchNotesWithTag;
  window.createTag = createTag;
  window.deleteTag = deleteTag;
  window.fetchTaggings = fetchTaggings;
  window.createTagging = createTagging;
  window.deleteTagging = deleteTagging;
  window.receiveTagErrors = receiveTagErrors;
  window.receiveTaggingErrors = receiveTaggingErrors;
}

const setupStoreTesting = (store) => {
  window.getState = store.getState;
  window.dispatch = store.dispatch;
}

const user = {
  email: "josh@gmail.com",
  password: "password"
}