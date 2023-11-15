import React from 'react'
import './allevent.css'

function Sns() {


  function Snss({ title, value }) {
    const titleStyle = {
      fontSize: '12px',
    }
    const valueStyle = {
      fontSize: '32px',
      margin: '3px',

    }

    return (
      <div title={title} value={value}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={valueStyle}>{value}</p>
      </div>
    )
  }

  function SnsList({ title, value }) {
    const titleStyle = {
      color: '#F01010'
    }

    return (
      <div className='eventPair'>
        <div className='title'>{title}</div>
        <div className='value' style={titleStyle}>{value}</div>
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
      </div>

    </div>
  )
}

export default Sns