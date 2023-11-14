import React from "react";
import "./rediscache.css";

export default function AWSALB() {
  return (
    <div className="rediscache">
      <div className="module2-inner">
        <div className="heading">
          <h3>AWS ALB P1/SCM</h3>
        </div>
      </div>
      <div className="inner1">
        <div className="error-inbox">
          <p>ERROR INBOX</p>
          <h3>5</h3>
        </div>
        <div className="error-inbox">
          <p>SLI/SLO</p>
          <h3>00/00</h3>
        </div>
        <div className="error-inbox">
          <p>DISRUPTIONS</p>
          <h3>5</h3>
        </div>
      </div>
      <div className="network">
        <div>
          <p className="heading">Network</p>
        </div>
        <div className="speed">
          <p className="heading">50 mb/s</p>
        </div>
      </div>
      <div className="inner2">
        <div className="module">
          <div className="module-row">
            <div className="row1">
              <div>
                <p>Requests Count</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
            <div className="row1">
              <div>
                <p>Client TLS Negotiation</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
          </div>
          <div className="module-row">
            <div className="row1">
              <div>
                <p>HTTP Errors</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
            <div className="row1">
              <div>
                <p>Authentication Errors</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
          </div>
          <div className="module-row">
            <div className="row1">
              <div>
                <p>Connections</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
            <div className="row1">
              <div>
                <p></p>
              </div>
              <div>
                <h3 className="apdex-score"></h3>
              </div>
            </div>
          </div>
          <div className="module-row">
            <div className="row1">
              <div>
                <p></p>
              </div>
              <div>
                <h3 className="apdex-score"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
