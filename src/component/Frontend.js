import React from 'react'
import './css/Frontend.css'
import Cloudfront from './event/Cloudfront';
import Apigateway from './event/Apigateway';
import Browser from './event/Browser';


function Frontend() {


    return (
        <div className='frontend-panel'>
            <div className='header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
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