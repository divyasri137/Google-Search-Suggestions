import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toUpperCase().includes(searchInput.toUpperCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="image"
          alt="google logo"
        />
        <div className="card">
          <div className="input-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="icon-image"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input-search"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
          <ul className="suggestions-list">
            {filteredList.map(eachObject => (
              <SuggestionItem
                suggestion={eachObject.suggestion}
                onSuggestion={this.onSuggestion}
                key={eachObject.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
