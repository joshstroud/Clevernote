import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class TagsIndex extends Component {
  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchTaggings();
  }

  sortTagsByFirstChar() {
    let sortedTags = {};

    Object.values(this.props.tags).forEach(tag => {
      let firstChar = tag.name[0];

      if (firstChar.match(/[0-9]/)) {
        // if first character is a number, store in object as 0
        firstChar = 0;
      } else if (!firstChar.match(/[a-z]/i)) {
        // if first char is not a letter (ie symbol), store in object as 1
        firstChar = 1;
      }

      if (!sortedTags[firstChar]) {
        sortedTags[firstChar] = [];
      }
      sortedTags[firstChar].push(tag);
    });

    return sortedTags;
  }

  sortTagKeysAlphabetically(sortedTags) {
    let sortedTagKeys = Object.keys(sortedTags).sort((a, b) => {
      if (a === a.toUpperCase() && b === b.toLowerCase()) {
        return -1;
      } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
        return 1;
      } else if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });

    return sortedTagKeys;
  }

  renderTagCategories() {
    const sortedTags = this.sortTagsByFirstChar();
    const sortedTagKeys = this.sortTagKeysAlphabetically(sortedTags);
    // console.log(sortedTags);
    // console.log(sortedTagKeys);

    if (Object.keys(sortedTagKeys).length === 0) {
      return null;
    }

    const tagCategories = sortedTagKeys.map(firstChar => {
      const tagsForCategory = sortedTags[firstChar].map(tag => {
        return (
          <div className="tags-index-tag-row">
            <div className="tags-index-tag">
              {tag.name}
              <FontAwesomeIcon
                className="tags-index-chevron-down"
                icon={faChevronDown}
                onClick={this.toggleNotebookList}
              />
            </div>
          </div>
        );
      });

      if (firstChar === "0") {
        firstChar = "0 - 9";
      } else if (firstChar === "1") {
        firstChar = "#";
      }

      return (
        <div className="tags-index-category">
          <div className="tags-index-category-header">{firstChar}</div>
          {tagsForCategory}
          <br />
        </div>
      );
    });

    return tagCategories;
  }

  render() {
    return (
      <section className="tags-index-wrapper">
        <header className="tags-index-header-wrapper">
          <div className="tags-index-header">Tags</div>
        </header>
        <div className="tags-index-main-wrapper">
          {this.renderTagCategories()}
        </div>
      </section>
    );
  }
}

export default TagsIndex;
