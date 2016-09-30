import jQuery from 'jquery'
import uswds from 'uswds'
import React, { Component, PropTypes } from 'react'

const NUM_TOPICS_SEARCH_THRESHOLD = 0;

class SearchTopics extends Component {

  constructor() {
    super()

    this.state = {
      searchVal: "",
      shouldShowSearch: false
    }
  }

  handleChange(event) {
    var searchVal = event.target.value
    this.setState({searchVal: searchVal})

    jQuery("ul.usa-accordion li").each(function () {
      if (jQuery(this).text().search(new RegExp(searchVal, "i")) < 0) {
        jQuery(this).fadeOut()
      } else {
        jQuery(this).show()
      }
    })
  }

  componentDidMount() {
    // only show the search if we have too many items
    let searchTopics = jQuery("ul.usa-accordion li")
    let shouldShowSearch = searchTopics ? searchTopics.length > NUM_TOPICS_SEARCH_THRESHOLD : false
    this.setState({
      shouldShowSearch: shouldShowSearch
    })
  }

  render() {
    if (this.state.shouldShowSearch) {
      return (
        <div >
          <div>
            <form style={{width: "100%"}}>
              <div role="search">
                <input
                 id="search-field-small"
                 type="search"
                 name="search"
                 placeholder="Search Term"
                 value={this.state.searchVal}
                 onChange={this.handleChange.bind(this)}
                />
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

}

export default SearchTopics
