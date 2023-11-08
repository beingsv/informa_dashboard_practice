import React from 'react'
import './allevent.css'


function ApiGatewayEvent({title, value}) {
    return (
        <div title={title} value={value}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}

function ApiGatewayEventList({title, value}) {
    return (
        <div className='eventPair'>
            <div className='title'>{title}</div>
            <div className='value'>{value}</div>
        </div>
    )
}



function Apigateway() {
  return (
    <div className='card'>
        <h2>API Gateway</h2>
        <div className='eventBox'>
            <div className='error'><ApiGatewayEvent title={"Error Box"} value={"10"} /></div>
            <div className='sli'><ApiGatewayEvent title={"SLI/SLO"} value={"00/00"} /></div>
            <div className='disruption'><ApiGatewayEvent  title={"Disruptions"} value={"10"} /></div>
        </div>
        <div className='eventList'>
            <ApiGatewayEventList title={"4xx Error Rate"} value={"2"} />
            <ApiGatewayEventList title={"5xx Error Rate"} value={"5"} />
            <ApiGatewayEventList title={"Latency"} value={"5.2ms"} />
            <ApiGatewayEventList title={"Total Request"} value={"21"} />
        </div>

    </div>
  )
}

export default Apigateway