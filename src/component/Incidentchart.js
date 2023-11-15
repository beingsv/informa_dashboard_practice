import React from 'react'
import { useState } from 'react';
import Chart from 'react-apexcharts';
import './css/Incidentchart.css'

function Incidentchart() {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [20, 21, 23, 24, 25, 26, 27, 28, 29]
            }
        },
        series: [
            {
                name: "app-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
            {
                name: "app-2",
                data: [28, 60, 55, 35, 46, 68, 72, 99],
            },
            {
                name: "app-3",
                data: [28, 30, 45, 25, 46, 66, 75, 92],
            },
        ]
    });


    return (
        <div className='chart' id='chart2'>
            <h2>Incident</h2>

            <Chart
                className='linechart'
                options={state.options}
                series={state.series}
                type="line"
                width="90%"
                height={300}
                margin={{ top: 0, right: "5%", bottom: 0, left: "5%" }}
            />
        </div>
    )
}

export default Incidentchart