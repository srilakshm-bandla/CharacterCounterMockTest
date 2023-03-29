import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCounter extends Component {
  state = {characterInput: '', userList: []}

  onChangeInputElement = event => {
    this.setState({characterInput: event.target.value})
  }

  renderNoUSerView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="noview-image"
      />
    </>
  )

  renderUSerView = () => {
    const {userList} = this.state
    return (
      <>
        <ul className="list-user-items">
          {userList.map(each => (
            <li key={each.id}>
              <p className="length">
                {each.characterInput} : {each.characterInput.length}
              </p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  onAddCharacters = event => {
    event.preventDefault()
    const {characterInput, userList} = this.state

    const newUserInput = {
      id: uuidv4(),
      characterInput,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, newUserInput],
      characterInput: '',
    }))
  }

  render() {
    const {characterInput, userList} = this.state
    const arrayLength = userList.length

    return (
      <div className="main-container">
        <div className="left-container">
          <div className="left-inner">
            <h1 className="left-heading">Count the characters like a Boss..</h1>
          </div>
          <div>{arrayLength === 0 && this.renderNoUSerView()}</div>
          <div>{arrayLength !== 0 && this.renderUSerView()}</div>
        </div>
        <div className="right-container">
          <h1 className="heading">Character Counter</h1>
          <form name="character-input" onSubmit={this.onAddCharacters}>
            <input
              type="text"
              name="characterInput"
              className="input-text"
              id="characterInput"
              placeholder="Enter the Characters here"
              value={characterInput}
              onChange={this.onChangeInputElement}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
