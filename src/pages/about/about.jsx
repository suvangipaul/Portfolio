import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Suvangi Paul and <span>Stack Developer</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, autem cupiditate. Totam quisquam dignissimos
                  adipisci in alias soluta natus, accusantium, fugit id ipsam
                  aperiam perspiciatis pariatur corrupti dolor dolore? Fugit.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row1">
                  <div className="info-item padd-15">
                    <p>
                      Birthday: <span>14 Feb 2002</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age: <span>20</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email: <span>suvangipaul8@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Degree: <span>BTech in Computer Science Engineering</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone: <span>90XXXXXXXX</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Address: <span>Bhatpara,Kolkata,West Bengal</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Work Mode: <span>Available for opportunities</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">Skills</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
