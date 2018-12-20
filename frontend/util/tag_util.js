import pickBy from "lodash.pickby"

export const selectTaggingFromTag = (taggings, tag) => {
  return Object.values(pickBy(taggings, (tagging, taggingId) => {
    return tag.id === tagging.tag_id
  }))[0]
}