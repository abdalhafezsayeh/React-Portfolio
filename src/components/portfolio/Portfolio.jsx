import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './portfolio.css'


function Portfolio() {
  return (
    <>
    <section className='por'>
        <p className="text-center">Recent Work</p>
        <h3 className="text-center">My Portfolio</h3>


        {/* Start LayOuT Porfolio */}
        <div>
          <Row>

            <Col className='text-center'>
              <div className='boxPor'>
                {/* Image */}
                <div className='box_image'>
                  <img src="https://via.placeholder.com/350x200" />
                </div>

                {/* Header About Por  */}
                <div className='box_header'>
                  <h4>the element to resemble</h4>
                </div>

                {/* Two Button  */}
                <div className='box_buttons'>
                  {/* <a href="#" target='_blank'>GitHub</a>
                  <a href="#" target='_blank'>Live Demo</a> */}

                  <Button className='btn_pro' variant="outline-primary" href='http://www.google.com' target='_blank'>GitHub</Button>
                  <Button className='btn_pro' href='wwwww'>Live Demo</Button>
                </div>
              </div>
            </Col>

            <Col>
              <div>
                Two
              </div>
            </Col>

            <Col>
              <div>
                three
              </div>
            </Col>

          </Row>
        </div>


    </section>
    </>
  )
}

export default Portfolio