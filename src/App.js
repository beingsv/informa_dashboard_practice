// import logo from "./logo.svg";
import "./App.css";
import Servive from "./Components/Servive";
import Rediscache from "./Components/rediscache";
import Rdscluster from "./Components/rdscluster";
import VpcnatGateway from "./Components/vpc-nat-gateway";
import AWSALB from "./Components/aws-alb";
function App() {
  const heading = ["A", "B", "C"];
  return (
    <>
      {heading.map((item) => {
        return <Servive item={item} />;
      })}
      <div className="frame">
        <div className="frame1">
          <div>Informa OCC SCM</div>
          <div className="frame2"></div>
        </div>
        <div className="frame3">
          <div className="module1">fgfgfgfg</div>
          <div className="module1">bgbgbgggbgb</div>
        </div>
        <div className="frame3">
          <div className="module2">
            <div className="module2-inner">
              <div className="heading">
                <h3>Prod Frontend-A</h3>
              </div>
            </div>

            <div className="module2-inner">
              <div className="error-inbox">
                <p>ERROR INBOX</p>
                <h3>5</h3>
              </div>

              <div className="error-inbox slo">
                <p>SLI/SLO</p>
                <h3>00/00</h3>
              </div>
              <div className="error-inbox disruption">
                <p>DISRUPTIONS</p>
                <h3>5</h3>
              </div>
            </div>
            <div className="scores">
              <div className="scores-row">
                <div className="apdex">
                  <div>apdex</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Throuhput</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
              {/* <div className="scores-row">vgvgv</div>
               */}
              <div className="scores-row">
                <div className="apdex">
                  <div>Error Rate</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Slowest Transactions</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="module2">
            <div className="module2-inner">
              <div className="heading">
                <h3>Prod Frontend-B</h3>
              </div>
            </div>
            <div className="module2-inner">
              <div className="error-inbox">
                <p>ERROR INBOX</p>
                <h3>5</h3>
              </div>

              <div className="error-inbox slo">
                <p>SLI/SLO</p>
                <h3>00/00</h3>
              </div>
              <div className="error-inbox disruption">
                <p>DISRUPTIONS</p>
                <h3>5</h3>
              </div>
            </div>
            <div className="scores">
              <div className="scores-row">
                <div className="apdex">
                  <div>apdex</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Throuhput</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
              {/* <div className="scores-row">vgvgv</div>
               */}
              <div className="scores-row">
                <div className="apdex">
                  <div>Error Rate</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Slowest Transactions</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="module2">
            <div className="module2-inner">
              <div className="heading">
                <h3>Prod Frontend-C</h3>
              </div>
            </div>
            <div className="module2-inner">
              <div className="error-inbox">
                <p>ERROR INBOX</p>
                <h3>5</h3>
              </div>

              <div className="error-inbox slo">
                <p>SLI/SLO</p>
                <h3>00/00</h3>
              </div>
              <div className="error-inbox disruption">
                <p>DISRUPTIONS</p>
                <h3>5</h3>
              </div>
            </div>
            <div className="scores">
              <div className="scores-row">
                <div className="apdex">
                  <div>apdex</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Throuhput</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
              {/* <div className="scores-row">vgvgv</div>
               */}
              <div className="scores-row">
                <div className="apdex">
                  <div>Error Rate</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Slowest Transactions</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="module2">rrrrrrrr</div> */}
        </div>
        <div className="frame4">
          <div className="frame4-inner1">
            <div className="frame4-module">
              <div className="module2-inner">
                <div className="heading">
                  <h3>Lambda</h3>
                </div>
              </div>
              <div className="module2-inner">
                <div className="error-inbox">
                  <p>ERROR INBOX</p>
                  <h3>5</h3>
                </div>

                <div className="error-inbox slo">
                  <p>SLI/SLO</p>
                  <h3>00/00</h3>
                </div>
                <div className="error-inbox disruption">
                  <p>DISRUPTIONS</p>
                  <h3>5</h3>
                </div>
              </div>
              <div className="scores">
                <div className="scores-row">
                  <div className="apdex">
                    <div>apdex</div>
                    <div className="apdex-score">0.2</div>
                  </div>
                  <div className="apdex">
                    <div>Throuhput</div>
                    <div className="apdex-score">0.2</div>
                  </div>
                </div>
                {/* <div className="scores-row">vgvgv</div>
                 */}
                <div className="scores-row">
                  <div className="apdex">
                    <div>Error Rate</div>
                    <div className="apdex-score">0.2</div>
                  </div>
                  <div className="apdex">
                    <div>Slowest Transactions</div>
                    <div className="apdex-score">0.2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame4-module">
              <div className="module2-inner">
                <div className="heading">
                  <h3>API Gateway</h3>
                </div>
              </div>
              <div className="module2-inner">
                <div className="error-inbox">
                  <p>ERROR INBOX</p>
                  <h3>5</h3>
                </div>

                <div className="error-inbox slo">
                  <p>SLI/SLO</p>
                  <h3>00/00</h3>
                </div>
                <div className="error-inbox disruption">
                  <p>DISRUPTIONS</p>
                  <h3>5</h3>
                </div>
              </div>
              <div className="scores">
                <div className="scores-row">
                  <div className="apdex">
                    <div>apdex</div>
                    <div className="apdex-score">0.2</div>
                  </div>
                  <div className="apdex">
                    <div>Throuhput</div>
                    <div className="apdex-score">0.2</div>
                  </div>
                </div>
                {/* <div className="scores-row">vgvgv</div>
                 */}
                <div className="scores-row">
                  <div className="apdex">
                    <div>Error Rate</div>
                    <div className="apdex-score">0.2</div>
                  </div>
                  <div className="apdex">
                    <div>Slowest Transactions</div>
                    <div className="apdex-score">0.2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame4-inner2">
          <div className="frame4-module">
            <div className="module2-inner">
              <div className="heading">
                <h3>ECS Infra Prod Frontend-A</h3>
              </div>
            </div>
            <div className="module2-inner">
              <div className="error-inbox">
                <p>ERROR INBOX</p>
                <h3>5</h3>
              </div>

              <div className="error-inbox slo">
                <p>SLI/SLO</p>
                <h3>00/00</h3>
              </div>
              <div className="error-inbox disruption">
                <p>DISRUPTIONS</p>
                <h3>5</h3>
              </div>
            </div>
            <div className="scores">
              <div className="scores-row">
                <div className="apdex">
                  <div>apdex</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Throuhput</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
              {/* <div className="scores-row">vgvgv</div>
               */}
              <div className="scores-row">
                <div className="apdex">
                  <div>Error Rate</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Slowest Transactions</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame4-module">
            <div className="module2-inner">
              <div className="heading">
                <h3>ECS Infra Prod Frontend-B</h3>
              </div>
            </div>
            <div className="module2-inner">
              <div className="error-inbox">
                <p>ERROR INBOX</p>
                <h3>5</h3>
              </div>

              <div className="error-inbox slo">
                <p>SLI/SLO</p>
                <h3>00/00</h3>
              </div>
              <div className="error-inbox disruption">
                <p>DISRUPTIONS</p>
                <h3>5</h3>
              </div>
            </div>
            <div className="scores">
              <div className="scores-row">
                <div className="apdex">
                  <div>apdex</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Throuhput</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
              {/* <div className="scores-row">vgvgv</div>
               */}
              <div className="scores-row">
                <div className="apdex">
                  <div>Error Rate</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Slowest Transactions</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame4-module">
            <div className="module2-inner">
              <div className="heading">
                <h3>ECS InfraProd Frontend-C</h3>
              </div>
            </div>
            <div className="module2-inner">
              <div className="error-inbox">
                <p>ERROR INBOX</p>
                <h3>5</h3>
              </div>

              <div className="error-inbox slo">
                <p>SLI/SLO</p>
                <h3>00/00</h3>
              </div>
              <div className="error-inbox disruption">
                <p>DISRUPTIONS</p>
                <h3>5</h3>
              </div>
            </div>
            <div className="scores">
              <div className="scores-row">
                <div className="apdex">
                  <div>apdex</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Throuhput</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
              {/* <div className="scores-row">vgvgv</div>
               */}
              <div className="scores-row">
                <div className="apdex">
                  <div>Error Rate</div>
                  <div className="apdex-score">0.2</div>
                </div>
                <div className="apdex">
                  <div>Slowest Transactions</div>
                  <div className="apdex-score">0.2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame4">
          <Rediscache />
          <Rdscluster />
        </div>
        <div className="frame4">
          <VpcnatGateway />
          <AWSALB />
        </div>
      </div>
    </>
  );
}

export default App;
