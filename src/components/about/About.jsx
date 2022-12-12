import React from "react";
// Bootstarp Elements
import { Button, Col, Row } from "react-bootstrap";
// Image
import ME from "../../assets/about.jpg";
// Styles
import "./about.css";
// Icons
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function About() {
  return (
    <>
      <section className=" mt-5">
        <p className="text-center">Get To Know</p>
        <h3 className="text-center">About Me</h3>

        <div className="mt-5">
          <Row>
            <Col>
              <div className="about_me">
                <div className="about_image">
                  <img src={ME} alt="About Me Image" />
                </div>
              </div>
            </Col>
            <Col>
              <Row>
                <Col sm>
                  <div className="about_text_box text-center">
                    <FaAward className="about_icon" />
                    <h5>Experience</h5>
                    <small>1+ Years Working</small>
                  </div>
                </Col>
                <Col sm>
                  <div className="about_text_box text-center">
                    <FiUsers className="about_icon" />
                    <h5>Clients</h5>
                    <small>5+ WorldWide</small>
                  </div>
                </Col>
                <Col sm>
                  <div className="about_text_box text-center">
                    <AiOutlineFundProjectionScreen className="about_icon" />
                    <h5>Projects</h5>
                    <small>10+ Completed</small>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="about_dis">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum hic recusandae quibusdam debitis at tempora omnis odit
                    est officia deleniti.
                  </p>
                  <Button className="about_bt">Let's Talk</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default About;
