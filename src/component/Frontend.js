import React from 'react'
import './css/Frontend.css'
import Cloudfront from './event/Cloudfront';
import Apigateway from './event/Apigateway';
import Browser from './event/Browser';


function Frontend() {


    return (
        <div className='frontend-panel'>
            <div className='header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" fill="#24B3AB" fill-opacity="0.5" stroke="#70ADAC" />
                </svg>
                <p className='frontend-heading'>Front-end</p>
                <div className='tags'>
                    <p>Cloudfront</p>
                    <p>API Gateways</p>
                    <p>Browser</p>
                </div>
            </div>

            <div className='cards'>
                <Cloudfront />
                <Apigateway />
                <Browser />
            </div>


        </div>
    )
}

export default Frontend;