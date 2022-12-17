// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {date, title} = props

  let imgUrl

  return (
    <div className="item">
      <h1>{title}</h1>
      <img />
      <p>{date}</p>
    </div>
  )
}
