import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../css/Home.css";
import "./vision.png"

const Home = () => {
  return (
    <Fragment>
      <section className="main" id="home">
        <div>
          <div className="head">
            <h2>TURN YOUR MORTGAGE INTO AN</h2>
            <h3>INVESTMENT ASSET</h3>
          </div>

          <div>
            <NavLink href="#projects" className="main-btn">
              Get Started
            </NavLink>
          </div>
        </div>
      </section>

      <section class="cards" id="services">
        <h2 class="title">Services</h2>

        <div className="why">Why BABIL is there ?</div>

        <div class="content">
          <div className="why-p why-p-card">
            <p>
              <p>
                • The mortgagee being deducted maximum by %65 of their monthly
                income.
              </p>

              <p>
                • The invest or Saving ability of the Mortgagees are difficult
                or might be <br />
                <p style={{ paddingLeft: "1.5em" }}>
                  {" "}
                  impossible due to the maximum credit limits which they
                  reached.
                </p>
              </p>

              <p>
                • Mortgage loans may take up to 30 years to be fully paid, Then
                Mortgagees
                <p style={{ paddingLeft: "1.5em" }}>
                  return to stable financial condition, despite that, will not
                  return because usually
                  <br />
                  they referred to retirement and the incomes level decreased
                  dramatically.
                </p>
              </p>

              <p>
                • The mortgaged real estate ( Assets - houses) cannot be
                liquidated or generate <br />
                <p style={{ paddingLeft: "1.5em" }}>
                  {" "}
                  cash (Except the cases of leasing).
                </p>
              </p>

              <p>
                • Number of induvial Mortgage loans defaults is decreased while
                overall mortgage <br />
                <p style={{ paddingLeft: "1.5em" }}>
                  {" "}
                  loans defaults are increased since induvials guaranteed by
                  salaries.
                </p>
              </p>
            </p>
          </div>

          <div>
            <div class="card">
              <div class="info">
                <p>
                  Accordingly, mortgagees will not be able to invest or generate
                  cash from the asset the actually owned
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="main" id="ourvision">
        <section>
          <h2 class="title">Our Vision</h2>
          <div className="vision-card">
            <p>
              To become the largest and first choose in the mortgage trading
              market by turning mortgage to financial Securities.
            </p>
          </div>
        </section>

        <section id="ourmission">
          <h2 class="title">Our Mission</h2>
          <div className="vision-card">
            <p>
              To support the mortgagees in turning their untapped assets into
              investment tool or supporting the current assets for better credit
              assessments and financial stability.
            </p>
          </div>
        </section>
      </div>

      <section id="why">
        <h2 class="title">Why Customers needs us ?</h2>

        <div className="main2">
          <div className="vision-card">
            <p>
              • Support the mortgagee in paying installments.
              <br />• Higher the credit score and limits in addition to
              enhancethe
              <p style={{ paddingLeft: "1.5em" }}>
                {" "}
                risk assessment and customer profiling.
              </p>
              • Capitalize and Include the untapped equities in the customer’s
              <p style={{ paddingLeft: "1.5em" }}>financial solvency.</p>
            </p>
          </div>
        </div>
      </section>

      <section id="journey">
        <h2 class="title">Customers values and Journey</h2>
        <div className="content">
          <div>
            <h3>Customer</h3>
            <h5>(mortgagee)</h5>
          </div>

          <i
            class="fa-solid fa-arrow-right-long fa-beat fa-2xl"
            style={{ fontSize: "3em", padding: "0.1em" }}
          ></i>

          <div className="card-value">
            <h2>Request</h2>
            <p>Submit an investment by mortgage request through BABL</p>
          </div>

          <i
            class="fa-solid fa-arrow-right-long fa-beat fa-2xl"
            style={{ fontSize: "3em", padding: "0.1em" }}
          ></i>

          <div className="card-value">
            <h2>Validation</h2>
            <p>
              Simah–Current Lender –MOJ –New Lender –Elm –REGA - 3 rd Party
              Credit management{" "}
            </p>
          </div>

          <i
            class="fa-solid fa-arrow-right-long fa-beat fa-2xl"
            style={{ fontSize: "3em", padding: "0.1em" }}
          ></i>

          <div className="card-value">
            <h2>Proposal</h2>
            <p>The eligibility balance – Investment options</p>
          </div>

          <i
            class="fa-solid fa-arrow-right-long fa-beat fa-2xl"
            style={{ fontSize: "3em", padding: "0.1em" }}
          ></i>

          <div className="card-value">
            <div className="card-value" style={{ backgroundColor: "#8a49f6" }}>
              <h2>Settlement</h2>
              <p>Proposal approval –divide the mortgage by equity</p>
            </div>
            <center>
              {" "}
              <i
                class="fa-solid fa-arrow-down-long fa-beat fa-2xl"
                style={{ fontSize: "3em", padding: "0.5em", color: "black" }}
              ></i>
            </center>
          </div>
        </div>

        <div className="content2">
          <div className="card-value">
            <h2>Activate</h2>
            <p>Perform the new equity process for mortgage with the lender</p>
          </div>

          <i
            class="fa-solid fa-arrow-left-long fa-beat fa-2xl"
            style={{ fontSize: "3em", padding: "0.1em" }}
          ></i>

          <div className="card-value">
            <h2>Investment</h2>
            <p>
              Manage the investment as per the approved proposal and report
              instantly{" "}
            </p>
          </div>

          <i
            class="fa-solid fa-arrow-left-long fa-beat fa-2xl"
            style={{ fontSize: "3em", padding: "0.1em" }}
          ></i>

          <div className="card-value">
            <h2>Closing</h2>
            <p>
              Upon the original mortgage closure, investment would be released
              and case closed
            </p>
          </div>
          <div style={{ textAlign: "start", paddingRight: "5em" }}>
            <h1>Value Chain</h1>
          </div>
        </div>
      </section>

      {/* <section>
        <h1 className="title">Why Now</h1>
        <div className="content-p">
          <p className="title" >
            Align with Vision 2030 initiatives (increase investment rate to 6% and Saving rate)
          </p>
        </div>
      </section> */}

      <section>
      <h2 class="title">Why Now</h2>
      <div className="main2" id="ourvision">
        <section>
          
          <div className="vision-card">
            <p>
             <h1>Align with Vision 2030 initiatives</h1>  
              <br/>
              (increase investment rate to 6% and Saving rate)
            </p>
          </div>
        </section>
        <section>
          <div className="vision-card">
          <img src={require('../images/gif.gif')} alt="" className="img"></img>
          
          </div>
        </section>


      </div>
      </section>

      <section className="content" id="contact">

      </section>
      <footer>

      </footer>
    </Fragment>
  );
};

export default Home;
