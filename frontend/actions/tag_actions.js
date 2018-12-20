import * as TagApiUtil from "../util/tag_api_util";

import {
  receiveNotes
} from "./note_actions";
// Tags

export const RECEIVE_TAGS = "RECEIVE_TAGS"
export const RECEIVE_TAG = "RECEIVE_TAG";
export const DELETE_TAG = "DELETE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";

export const receiveTags = tags => {
  return {
    type: RECEIVE_TAGS,
    tags
  };
};

export const fetchTags = () => dispatch => {
  return TagApiUtil.fetchTags()
    .then(tags => dispatch(receiveTags(tags)));
};

export const fetchNotesWithTag = (tagId) => dispatch => {
  return TagApiUtil.fetchNotesWithTag(tagId)
    .then(notes => dispatch(receiveNotes(notes)));
};


export const receiveTag = tag => {
  return {
    type: RECEIVE_TAG,
    tag
  };
};

export const createTag = (tag) => dispatch => {
  return TagApiUtil.createTag(tag)
    .then(tag => dispatch(receiveTag(tag)));
};


export const receiveDeleteTag = tagId => {
  return {
    type: DELETE_TAG,
    tagId
  };
};

export const deleteTag = (tagId) => dispatch => {
  return TagApiUtil.deleteTagging(tagId)
    .then(tag => dispatch(receiveDeleteTag(tag.id)));
};


export const receiveTagErrors = errors => {
  return {
    type: RECEIVE_TAG_ERRORS,
    errors
  };
};

// Taggings

export const RECEIVE_TAGGINGS = "RECEIVE_TAGGINGS";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const DELETE_TAGGING = "DELETE_TAGGING";
export const RECEIVE_TAGGING_ERRORS = "RECEIVE_TAGGING_ERRORS";

export const receiveTaggings = taggings => {
  return {
    type: RECEIVE_TAGGINGS,
    taggings
  };
};

export const fetchTaggings = () => dispatch => {
  return TagApiUtil.fetchTaggings()
    .then(taggings => dispatch(receiveTaggings(taggings)));
};

export const receiveTagging = tagging => {
  return {
    type: RECEIVE_TAGGING,
    tagging
  };
};

export const createTagging = (tagging) => dispatch => {
  return TagApiUtil.createTagging(tagging)
    .then(tagging => dispatch(receiveTagging(tagging)));
};

export const receiveDeleteTagging = taggingId => {
  return {
    type: DELETE_TAGGING,
    taggingId
  };
};

export const deleteTagging = (taggingId) => dispatch => {
  return TagApiUtil.deleteTagging(taggingId)
    .then(tagging => dispatch(receiveDeleteTagging(tagging.id)));
};

export const receiveTaggingErrors = errors => {
  return {
    type: RECEIVE_TAGGING_ERRORS,
    errors
  };
};