import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TagDropdownContainer from "../ui_elements/dropdowns/tag_dropdown_container";

class TagsIndex extends Component {
  constructor(props) {
    super(props);

    this.handleTagDropdownClick = this.handleTagDropdownClick.bind(this);
  }

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

  renderTagCategory(firstChar, tag) {
    return (
      <div
        className="tags-index-tag-row-wrapper"
        key={`key-${firstChar}-${tag.id}`}
      >
        <div className="tags-index-tag-row">
          <div className="tags-index-tag">
            <Link to={`/app/tags/${tag.id}`} className="tags-index-tag-link">
              {tag.name}
              <div className="tags-index-tag-count">({tag.taggings_count})</div>
            </Link>
            <FontAwesomeIcon
              className="tags-index-chevron-down"
              icon={faChevronDown}
              onClick={e => this.handleTagDropdownClick(e, tag)}
            />
            <TagDropdownContainer tag={tag} />
          </div>
        </div>
      </div>
    );
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
        return this.renderTagCategory(firstChar, tag);
      });

      if (firstChar === "0") {
        firstChar = "0 - 9";
      } else if (firstChar === "1") {
        firstChar = "#";
      }

      return (
        <div className="tags-index-category" key={firstChar}>
          <div className="tags-index-category-header">{firstChar}</div>
          {tagsForCategory}
          <br />
        </div>
      );
    });

    return tagCategories;
  }

  handleTagDropdownClick(e, tag) {
    e.preventDefault();
    this.props.openDropdown("tags-index-delete-tag", tag.id);
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
