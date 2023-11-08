import React from 'react'
import './allevent.css'


function CloudfrontEvent({title, value}) {
    return (
        <div title={title} value={value}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}

function CloudfrontEventList({title, value}) {
    return (
        <div title={title} value={value}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}

function Cloudfront() {
  return (
    <div className='card'>
        <h2>Cloudfront</h2>
        <div className='eventBox'>
            <div className='error'><CloudfrontEvent title={"Error Box"} value={"10"} /></div>
            <div className='sli'><CloudfrontEvent title={"SLI/SLO"} value={"00/00"} /></div>
            <div className='disruption'><CloudfrontEvent  title={"Disruptions"} value={"10"} /></div>
        </div>
        <div className='eventList'>
            <CloudfrontEventList title={"Cache Hit Ratio"} value={"45"} />
            <CloudfrontEventList title={"Error Rate"} value={"2%"} />
            <CloudfrontEventList title={"Total Bandwidth"} value={"5kb"} />
            <CloudfrontEventList title={"Success Rate"} value={"76%"} />
            <CloudfrontEventList title={"Total Request"} value={"21"} />
        </div>

    </div>
  )
}

export default Cloudfront