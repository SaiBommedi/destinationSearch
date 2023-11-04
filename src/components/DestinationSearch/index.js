import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchInputchange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const value = searchInput.toLowerCase()
    const filteredList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(value),
    )
    console.log(value)
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="searchbox">
          <div>
            <input
              className="search-input"
              placeholder="Search"
              type="search"
              onChange={this.onSearchInputchange}
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul className="places-container">
          {filteredList.map(eachItem => (
            <DestinationItem placeDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
