// Write your code here
import {Component} from 'react'
import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div className="bg">
        <div className="card">
          <div className="topContainer">
            <div className="leftContainer">
              <h1 className="heading">Add Appointment</h1>
              <form className="formElement">
                <p>TITLE</p>
                <input className="ip1" type="text" />
                <p>DATE</p>
                <input className="ip2" type="date" />
                <hr />
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="rightContainer">
              <img
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="image1"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="bottomContainer">
            <div className="container3">
              <h1 className="heading2">Appointments</h1>
              <button className="button2" type="button">
                Starred
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
