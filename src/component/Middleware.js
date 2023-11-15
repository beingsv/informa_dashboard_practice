import React from 'react'
import './css/Middleware.css'
import Stepfunction from './event/Stepfunction'
import AWSsqs from './event/AWSsqs'
import Sns from './event/Sns'

function Middleware() {
    return (
        <div className='middleware-panel'>
            <div className='header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                </svg>
                <p className='middleware-heading'>Middleware</p>
                <div className='tags'>
                    <p>Step Function</p>
                    <p>AWS SQS</p>
                    <p>SNS</p>
                    <p>Lambda</p>
                    <p>Cloud Search</p>
                </div>
            </div>

            <div className='cards'>
                <Stepfunction />
                <AWSsqs />
                <Sns />
            </div>

        </div>
    )
}

export default Middleware