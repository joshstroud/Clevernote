export const fetchTags = () => {
  return $.ajax({
    url: "/api/tags",
    method: "GET"
  });
};

export const fetchNotesWithTag = (tagId) => {
  return $.ajax({
    url: `/api/tags/${tagId}`,
    method: "GET"
  });
};

export const createTag = (tag) => {
  return $.ajax({
    url: "/api/tags",
    method: "POST",
    data: tag
  });
};

export const deleteTag = (tagId) => {
  return $.ajax({
    url: `/api/tags/${tagId}`,
    method: "DELETE"
  });
};

export const fetchTaggings = () => {
  return $.ajax({
    url: "/api/taggings",
    method: "GET"
  });
};

export const createTagging = (tagging) => {
  return $.ajax({
    url: "/api/taggings",
    method: "POST",
    data: tagging
  });
};

export const deleteTagging = (tagId) => {
  return $.ajax({
    url: `/api/taggings/${tagId}`,
    method: "DELETE"
  });
};