import React from 'react'
import './allevent.css'

function BrowserEvent({title, value}) {
    return (
        <div title={title} value={value}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}

function BrowserEventList({title, value}) {
    return (
        <div title={title} value={value}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}



function Browser() {
  return (
    <div className='card'>
        <h2>Browser</h2>
        <div className='eventBox'>
            <div className='error'><BrowserEvent title={"Error Box"} value={"10"} /></div>
            <div className='sli'><BrowserEvent title={"SLI/SLO"} value={"00/00"} /></div>
            <div className='disruption'><BrowserEvent  title={"Disruptions"} value={"10"} /></div>
        </div>
        <div className='eventList'>
            <BrowserEventList title={"JS Error Rate"} value={"2"} />
            <BrowserEventList title={"CLS"} value={"5.2ms"} />
            <BrowserEventList title={"LCP"} value={"2s"} />
            <BrowserEventList title={"FID"} value={"2ms"} />
        </div>

    </div>
  )
}

export default Browser