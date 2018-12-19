import * as TagApiUtil from "../util/tag_api_util"

// import {
//   fetchTags,
//   fetchNotesWithTag,
//   receiveTag,
//   createTag,
//   updateTag,
//   deleteTag,
//   receiveTagErrors
// } from "../actions/Tag_actions"

export const testTags = (store) => {
  testTagApiUtil();
  // testTagsRedux();
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
  window.receiveTag = receiveTag;
  window.createTag = createTag;
  window.updateTag = updateTag;
  window.deleteTag = deleteTag;
  window.receiveTagErrors = receiveTagErrors;
}

const setupStoreTesting = (store) => {
  window.getState = store.getState;
  window.dispatch = store.dispatch;
}

const user = {
  email: "josh@gmail.com",
  password: "password"
}