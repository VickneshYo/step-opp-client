import React from 'react'

import '../App.css';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Aboutus() {
    return (
        <div className="body">
    <div>
          <header class="bg-dark py-1 mb-4">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">About Us</h1>
                    <p class="lead fw-normal text-white-50 mb-0"> Opportunities don't happen, you create them</p>
                </div>
            </div>
        </header>
     
    </div>

   <h3 className="about2"> A Web-based Platform for all available opportunities for srilankan youths with  Visual Guideline.</h3>
    <div className="tab-aboutus">
   <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first"> What we do</Nav.Link>
              
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="second"> why we do it</Nav.Link>
              </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third"> Why should you join </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth"> How you can help </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first" style={{textAlign:"justify"}}>
              {/* <Sonnet /> */}
              We are going to represent the  all opportunity for SL Youths.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </Tab.Pane>
            <Tab.Pane eventKey="second" style={{textAlign:"justify"}}>
              {/* <Sonnet /> */}
              t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
            </Tab.Pane>
            <Tab.Pane eventKey="third" style={{textAlign:"justify"}}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </Tab.Pane>
            <Tab.Pane eventKey="fourth" style={{textAlign:"justify"}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
</div>
        </div>
    )
}
