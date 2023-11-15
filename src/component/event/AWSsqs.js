import React from 'react'
import './allevent.css'

function AWSsqs() {


  function Awssqs({ title, value }) {
    return (
      <div title={title} value={value}>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    )
  }

  function AwssqsList({ title, value }) {
    return (
      <div className='eventPair'>
        <div className='title'>{title}</div>
        <div className='value'>{value}</div>
      </div>
    )
  }

  return (
    <div className='card'>
      <h2>AWS SQS</h2>
      <div className='eventBox'>
        <div className='error'><Awssqs title={"Error Box"} value={"10"} /></div>
        <div className='sli'><Awssqs title={"SLI/SLO"} value={"00/00"} /></div>
        <div className='disruption'><Awssqs title={"Disruptions"} value={"10"} /></div>
      </div>
      <div className='eventList'>
        <AwssqsList title={"Oldest Message"} value={"45"} />
        <AwssqsList title={"Messages Delayed"} value={"15"} />
        <AwssqsList title={"Message Not Visible"} value={"10"} />
        <AwssqsList title={"Empty Receives"} value={"0"} />
        <AwssqsList title={"Messages Deleted"} value={"5"} />
      </div>

    </div>
  )
}

export default AWSsqs