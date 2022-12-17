// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: '', onlyStarred: false}

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  onStarred = id => {
    const {appointmentList} = this.state
    const newAppointmentList = appointmentList.map(each => {
      if (each.id === id) {
        return {
          ...each,
          isStarred: !each.isStarred,
        }
      }
      return each
    })
    this.setState({appointmentList: newAppointmentList})
  }

  onlyStarred = () => {
    const {onlyStarred} = this.state

    this.setState({
      onlyStarred: !onlyStarred,
    })
  }

  addAppointment = event => {
    event.preventDefault()
    const {appointmentList, title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    const newAppointmentList = [...appointmentList, newAppointment]
    this.setState({
      appointmentList: newAppointmentList,
      title: '',
      date: '',
    })
  }

  render() {
    const {appointmentList, title, date, onlyStarred} = this.state

    let appointmentList2

    if (onlyStarred) {
      appointmentList2 = appointmentList.filter(each => each.isStarred === true)
    } else {
      appointmentList2 = appointmentList
    }

    let cls = ''
    if (onlyStarred) {
      cls = 'colorTheButton'
    }

    return (
      <div className="bg">
        <div className="card">
          <div className="topContainer">
            <div className="leftContainer">
              <h1 className="heading">Add Appointment</h1>
              <form className="formElement" onSubmit={this.addAppointment}>
                <p>TITLE</p>
                <input
                  className="ip1"
                  type="text"
                  onChange={this.onTitleChange}
                  value={title}
                />
                <p>DATE</p>
                <input
                  className="ip2"
                  type="date"
                  onChange={this.onDateChange}
                  value={date}
                />
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
              <button
                className={`button2 ${cls}`}
                type="button"
                onClick={this.onlyStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointmentList">
              {appointmentList2.map(each => (
                <AppointmentItem
                  details={each}
                  onStarred={this.onStarred}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
