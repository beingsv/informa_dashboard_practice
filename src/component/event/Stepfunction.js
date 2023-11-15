import React from 'react'
import './allevent.css'

function Stepfunction() {

    function Middleware({ title, value }) {
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

    function MiddlewareList({ title, value }) {
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
            <h2>Step Function</h2>
            <div className='eventBox'>
                <div className='error'><Middleware title={"Error Box"} value={"10"} /></div>
                <div className='sli'><Middleware title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><Middleware title={"Disruptions"} value={"10"} /></div>
            </div>
            <div className='eventList'>
                <MiddlewareList title={"Execution Time"} value={"45"} />
                <MiddlewareList title={"Execution Throttled"} value={"15"} />
                <MiddlewareList title={"Execution Aborted"} value={"10"} />
                <MiddlewareList title={"Execution Failed"} value={"5"} />
                <MiddlewareList title={"Execution TimeOut"} value={"45"} />
            </div>

        </div>
    )
}

export default Stepfunction