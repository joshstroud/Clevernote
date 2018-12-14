export const dummyNotebooks = {
  1: {
    id: 1,
    title: "My First Notebook",
    ownerId: 3
  },
  2: {
    id: 2,
    title: "My Second Notebook",
    ownerId: 3
  },
  3: {
    id: 3,
    title: "My Third Notebook",
    ownerId: 3
  },

}

export const dummyTaggings = {
  1: {
    id: 1,
    tagId: 1,
    noteId: 1
  },
  2: {
    id: 2,
    tagId: 2,
    noteId: 1
  },
  3: {
    id: 3,
    tagId: 2,
    noteId: 2
  },
  4: {
    id: 4,
    tagId: 3,
    noteId: 2
  },
}

export const dummyTags = {
  1: {
    id: 1,
    name: "my-first-tag",
    taggingId: [1]
  },
  2: {
    id: 1,
    name: "my-second-tag",
    taggingId: [2, 3]
  },
  3: {
    id: 3,
    name: "my-third-tag",
    taggingId: [4]
  },
}