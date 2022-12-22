import React from "react";
import { Col, Row } from "react-bootstrap";
import "./experience.css";
// import icons
import { AiFillHtml5, AiOutlineGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaSass, FaReact } from "react-icons/fa";
import {
  TbBrandBootstrap,
  TbBrandJavascript,
  TbBrandReactNative,
  TbBrandAngular,
} from "react-icons/tb";
import {
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiExpress,
  SiMaterialui,
  SiTypescript,
} from "react-icons/si";




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
              {/* <h4 className="text-center title_box_ex">Front-End Development</h4> */}
              <Row>
                <Col>
                  <ul className="border_line_right ul_mobil">
                    <li>
                      <span className="icon_ex">
                        <AiFillHtml5 />
                      </span>
                      <span className="lang_ex">HTML/5</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <DiCss3 />
                      </span>
                      <span className="lang_ex">CSS/3</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <FaSass />
                      </span>
                      <span className="lang_ex">SASS</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <TbBrandBootstrap />
                      </span>
                      <span className="lang_ex">R-Bootstrap</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                  </ul>
                </Col>

                <Col>
                  <ul className="ul_mobil">
                    <li>
                      <span className="icon_ex">
                        <TbBrandJavascript />
                      </span>
                      <span className="lang_ex">JavaScript</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <FaReact />
                      </span>
                      <span className="lang_ex">React</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <TbBrandReactNative />
                      </span>
                      <span className="lang_ex">React Native</span>
                      <p className="des_ex">Experienced</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <SiRedux />
                      </span>
                      <span className="lang_ex">Redux & ToolKit</span>
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
              {/* <h4 className="text-center title_box_ex">Still Learning Tooll</h4> */}
              <Row>
                <Col>
                  <ul className="border_line_right ul_mobil">
                    <li>
                      <span className="icon_ex">
                        <AiOutlineGithub />
                      </span>
                      <span className="lang_ex">Git/GitHub</span>
                      <p className="des_ex">Intermediate</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <TbBrandAngular />
                      </span>
                      <span className="lang_ex">Angular</span>
                      <p className="des_ex">Intermediate</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <SiTypescript />
                      </span>
                      <span className="lang_ex">TypeScript</span>
                      <p className="des_ex">Intermediate</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <SiNodedotjs />
                      </span>
                      <span className="lang_ex">Node</span>
                      <p className="des_ex">Intermediate</p>
                    </li>
                  </ul>
                </Col>

                <Col>
                  <ul className="ul_mobil">
                    <li>
                      <span className="icon_ex">
                        <SiMongodb />
                      </span>
                      <span className="lang_ex">Mongodb</span>
                      <p className="des_ex">Intermediate</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <SiMaterialui />
                      </span>
                      <span className="lang_ex">Material Ui</span>
                      <p className="des_ex">Basic</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <SiSocketdotio />
                      </span>
                      <span className="lang_ex">Socket.Io</span>
                      <p className="des_ex">Basic</p>
                    </li>
                    <li>
                      <span className="icon_ex">
                        <SiExpress />
                      </span>
                      <span className="lang_ex">Express</span>
                      <p className="des_ex">Basic</p>
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
