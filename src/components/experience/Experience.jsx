import React from "react";
import { Col, Row } from "react-bootstrap";
import "./experience.css";

// import icons
import { AiFillHtml5 } from "react-icons/ai";

function Experience() {
  return (
    <section className="exp">
      <p className="text-center">What Skills I Have</p>
      <h3 className="text-center ">My Experience</h3>

      {/* Start LayOut  */}
      <div className="layOut_ex">
        <Row>

          {/* Start Skills Front-End  */}
          <Col md={12} lg={6}>
            <div className="box_track">
              <h4 className="text-center title_box_ex">Frontend Development</h4>
              <Row>
                <Col>
                  <ul className="border_line_right ul_mobil">
                    <li>
                      <span className="icon_ex">
                        <AiFillHtml5 />
                      </span>
                      <span className="lang_ex">HTML</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                  </ul>
                </Col>

                <Col>
                  <ul className="ul_mobil">
                    <li>
                      <span className="icon_ex">
                        <AiFillHtml5 />
                      </span>
                      <span className="lang_ex">HTML</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
          {/* End Skills Front-End  */}



          {/* Start Skills Back-End */}
          <Col md={12} lg={6}>
            <div className="box_track">
              <h4 className="text-center title_box_ex">Backend Development</h4>
              <Row>
                <Col>
                  <ul className="border_line_right ul_mobil">
                    <li>
                      <span className="icon_ex">
                        <AiFillHtml5 />
                      </span>
                      <span className="lang_ex">HTML</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                  </ul>
                </Col>

                <Col>
                  <ul className="ul_mobil">
                    <li>
                      <span className="icon_ex">
                        <AiFillHtml5 />
                      </span>
                      <span className="lang_ex">HTML</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
          {/* End Skills Back-End  */}

        </Row>
      </div>
      {/* End LayOut  */}
    </section>
  );
}

export default Experience;
