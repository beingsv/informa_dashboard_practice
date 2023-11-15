import React from 'react'
import './allevent.css'

function BrowserEvent({ title, value }) {
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

function BrowserEventList({ title, value }) {
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



function Browser() {
    return (
        <div className='card'>
            <h2>Browser</h2>
            <div className='eventBox'>
                <div className='error'><BrowserEvent title={"Error Box"} value={"10"} /></div>
                <div className='sli'><BrowserEvent title={"SLI/SLO"} value={"00/00"} /></div>
                <div className='disruption'><BrowserEvent title={"Disruptions"} value={"10"} /></div>
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