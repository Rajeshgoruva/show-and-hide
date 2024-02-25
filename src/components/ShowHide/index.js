// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstname: false,
    lastname: false,
  }

  firstname = () => {
    this.setState(p => ({
      firstname: !p.firstname,
    }))
  }

  lastname = () => {
    this.setState(p => ({
      lastname: !p.lastname,
    }))
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="button-container">
          <div className="namecontainer">
            <button type="button" onClick={this.firstname}>
              Show/Hide Firstname
            </button>

            {firstname && <p>Joe</p>}
          </div>

          <div className="namecontainer">
            <button type="button" onClick={this.lastname}>
              Show/Hide Lastname
            </button>
            {lastname && <p>Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
