import React from 'react'
import './allevent.css'

function Sns() {


  function Snss({ title, value }) {
    return (
      <div title={title} value={value}>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    )
  }

  function SnsList({ title, value }) {
    return (
      <div className='eventPair'>
        <div className='title'>{title}</div>
        <div className='value'>{value}</div>
      </div>
    )
  }

  return (
    <div className='card'>
      <h2>SNS</h2>
      <div className='eventBox'>
        <div className='error'><Snss title={"Error Box"} value={"10"} /></div>
        <div className='sli'><Snss title={"SLI/SLO"} value={"00/00"} /></div>
        <div className='disruption'><Snss title={"Disruptions"} value={"10"} /></div>
      </div>
      <div className='eventList'>
        <SnsList title={"Messages Published"} value={"2"} />
        <SnsList title={"Nofications Delivered"} value={"300"} />
        <SnsList title={"Notification Failed"} value={"125"} />
        {/* <SnsList title={"Empty Receives"} value={"2ms"} />
        <SnsList title={"Messages Deleted"} value={"2ms"} /> */}
      </div>

    </div>
  )
}

export default Sns