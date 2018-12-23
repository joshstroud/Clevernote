# Clevernote

[Visit the live site](http://clevernote.josh-stroud.com)

Clevernote is an Evernote clone created with React, Redux, Rails, and PostgreSQL. Users can create notes, save them to notebooks, and organize them with tags.

![Splash Page](https://github.com/joshstroud/Clevernote/blob/master/readme-files/splash-page.png?raw=true "Splash Page")

## Features

- Secure user authentication
- Create and edit notes in a rich text editor
- Save and organize notes to notebooks
- Add note tags
- Filter notes by notebook and tag

[Learn about my design process](https://github.com/joshstroud/Clevernote/wiki)

## Technologies

### Frontend

- React (front-end library)
  - [Redux (state manager)](https://redux.js.org/)
  - [Quill (rich-text editor)](https://quilljs.com)
  - [React Router (managing URLs and history)](https://reacttraining.com/react-router/)
- AJAX

### Backend

- Ruby on Rails
- PostgreSQL (database)

## Feature Highlights

### Frontend Component Design

The frontend of this project focused on using reusable React components. By sketching out the component hierarchy during the design phase, I was able to easily plan the architecture of UI components.

![Component Hierarchy](https://github.com/joshstroud/Clevernote/blob/master/docs/mockups/notes-component-hierarchy.png?raw=true "Component Hierarchy")

### Creating a note

Clevernote features a rich text editor where users can edit and save notes.

![Note Creation Demo](https://github.com/joshstroud/Clevernote/blob/master/readme-files/notes-demo.gif?raw=true "Note Creation Demo")

I chose to integrate an existing rich text editor library called [Quill](https://quilljs.com/). By carefully reading the docs, reading the examples, and experimenting, I implemented a full-featured editor with a style that matches the original Evernote editor.

Autosaving a note was a simple addition that makes a big difference in a user's experience. I implemented autosave using a simple timer that saves the note after a user finishes writing:

```js  startAutosaveTimer() {
    if (this.autosaveTimeoutId) {
      clearTimeout(this.autosaveTimeoutId);
    }

    this.autosaveTimeoutId = setTimeout(this.saveNote.bind(this), 500);
  }
```

### Filtering Notes By Tag

By using a reusable component for showing a list of notes, a user can easily search for a set of notes with a given tag. Tag search is seamless and intuitive.

![Tag Search Demo](https://github.com/joshstroud/Clevernote/blob/master/readme-files/tags-demo.gif?raw=true "Tag Search Demo")

Implementing permanent URLs for a searched tag was a challenge, so that a user could return to a search at a later time by visiting the same URL. After some thought, I wrote a simple URL router that searches the current URL for keywords, and dispatches UI actions when the URL changes to a new keyword. When a UI action is received, the UI updates to the current tag search.

These routes were implemented using React Router, a popular library for managing the URL and history of the browser.

```js
<Switch>
  <Route exact path="/app/notes" component={AllNotesPage} />
  <Route path="/app/notes/:noteId" component={AllNotesPage} />

  <Route exact path="/app/notebooks" component={NotebooksIndexContainer} />
  <Route
    path="/app/notebooks/:notebookId/notes/:noteId"
    component={NotebookNotesPage}
  />
  <Route path="/app/notebooks/:notebookId" component={NotebookNotesPage} />

  <Route exact path="/app/tags" component={TagsIndexContainer} />
  <Route path="/app/tags/:tagId/notes/:noteId" component={TaggedNotesPage} />
  <Route path="/app/tags/:tagId/" component={TaggedNotesPage} />

  <Redirect to="/app/notes" />
</Switch>
```
