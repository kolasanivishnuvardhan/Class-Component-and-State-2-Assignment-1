import {Component} from 'react'

import './index.css'

class HistoryItem extends Component {
  render() {
    const {eachItem, onDelete} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
    const deleteItem = () => {
      onDelete(id)
    }

    return (
      <li className="li">
        <p className="time">{timeAccessed}</p>
        <div className="history-details-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>

        <button data-testid="delete" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
          key={id}
        />

        </button>

      </li>
    )
  }
}

export default HistoryItem
