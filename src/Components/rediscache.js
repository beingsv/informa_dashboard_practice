import React from "react";
import "./rediscache.css";

export default function Rediscache() {
  return (
    <div className="rediscache">
      <div className="module2-inner">
        <div className="heading">
          <h3>Redis Cache</h3>
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
                <p>Cache Hit Count</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
            <div className="row1">
              <div>
                <p>Cache Miss Count</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
          </div>
          <div className="module-row">
            <div className="row1">
              <div>
                <p>Evictions</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
            <div className="row1">
              <div>
                <p>Replication Logs</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
          </div>
          <div className="module-row">
            <div className="row1">
              <div>
                <p>CPU</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
            <div className="row1">
              <div>
                <p>Memory</p>
              </div>
              <div>
                <h3 className="apdex-score">30</h3>
              </div>
            </div>
          </div>
          <div className="module-row">
            <div className="row1">
              <div>
                <p>CurrConnections</p>
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
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
