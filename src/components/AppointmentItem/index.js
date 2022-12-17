// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {details, onStarred} = props
  const {id, title, date, isStarred} = details

  const formattedDate = format(new Date(`${date}`), 'dd MMMM yyyy, EEEE')

  const starFunction = () => {
    onStarred(id)
  }

  let imgUrl
  if (isStarred) {
    imgUrl =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  } else {
    imgUrl =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  }
  return (
    <li className="item" key={id}>
      <div className="titleContainer">
        <h1 className="title">{title}</h1>
        <button type="button" testid="star" onClick={starFunction}>
          <img src={imgUrl} className="star" />
        </button>
      </div>

      <p className="date">Date: {formattedDate}</p>
    </li>
  )
}

export default AppointmentItem
