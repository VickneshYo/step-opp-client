import './css/singleOpp.css';
import './js/singleOpp';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Row from'react-bootstrap/Row';
import Nav from'react-bootstrap/Nav';
import  Col from'react-bootstrap/Col';
import opp5 from '../Photos/opp5.jpg';
import opp6 from '../Photos/opp4.jpeg';
import {FaRegBell} from 'react-icons/fa';
import Button1 from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import pic1 from '../Photos/pic1.jpg';
import { IconName } from "react-icons/fa";
import { FaRegHandPointUp } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';

import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  generatePath,
  Switch,
  Route,
  useHistory,
  useParams
} from "react-router-dom";

export default function Singleopp() {

    const { id } = useParams();
    console.log(id);

    const [opp, setOpp] = useState({});
    // var oppName = opp.name; 



    useEffect(() => {
        try {
          axios
            .get(`http://localhost:8000/api/opportunities/${id}`)
            .then((response) => {setOpp(response.data[0])});
            
        } catch (err) {
          // Handle Error Here
          console.error(err);
        } // };  
      }, []);

      console.log(opp);
    
    return (
        <div>
             {/* <header class="py-5 bg-light border-bottom mb-4">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Welcome to Blog Home!</h1>
                    <p class="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
                </div>
            </div>
        </header> */}
         <header class="bg-dark py-1 mb-4">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder"> {opp.name} </h1>
                    <p class="lead fw-normal text-white-50 mb-0"> Opportunities don't happen, you create them</p>
                </div>
            </div>
        </header>
       
        <div class="container">
            <div class="row">
               
                <div class="col-lg-8">
                   
                    <div class="card mb-4">
                        <a href="#!"><img class="card-img-top" src={opp.image} alt="..." /></a>
                        <div class="card-body">
                            <div class="small text-muted">January 1, 2021</div>
                            <div className="Row">
                            <h2 class="card-title">{opp.name}</h2>
                            <Button1 variant="secondary" className="btn-sub" style={{margin:"12px"}} href="/subscribe"> SUBSCRIBE  <FaRegBell/></Button1>
                            <Button1 variant="secondary" className="btn-sub" style={{margin:"12px"}}>  Facebook <i class="bi-facebook fs-6"></i></Button1>
                            </div>
                            <p class="card-text">{opp.desc}</p>
                            <a class="btn btn-primary" href="#!">Read more →</a>
                        </div>
                        
 
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"> Benefits </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"> Eligibilities </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"> Application Process </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        {opp.benifits}
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        {opp.eligibility}
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        {opp.app_process}   
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
                    </div>
                    
                    <div class="row">
                        <div class="col-lg-6">
                           
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src={opp6} alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2021</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                           
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src={opp6} alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2021</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                         
                        <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src={opp6} alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2021</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                           
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src={opp6} alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2021</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla?.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    {/* <nav aria-label="Pagination">
                        <hr class="my-0" />
                        <ul class="pagination justify-content-center my-4">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                            <li class="page-item"><a class="page-link" href="#!">15</a></li>
                            <li class="page-item"><a class="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav> */}
                </div>
               
                <div class="col-lg-4">
                <div class="card mb-4">
                            
                    <Card.Header as="h5" align="center">OO Hits
                    <div ClassName="icon" align="center">
                        <FaRegHandPointUp />
                    </div>
                    </Card.Header>
                                <div class="card-body">Watch to Learn about week's most popular opportunities!</div>
                                <       div ClassName="custom-youtube-player" align="center" >
                                <iframe
                                id="player" 
                                type="text/html" 
                                width="200" 
                                height="100"
                                src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                                frameborder="0">

                                </iframe>
                                <p><a href="">Step Opps</a></p>
                                
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto btn-block w-5" href="/Singleopp">Subscribe</a></div>
                                <FaRegThumbsUp />   <FaBell />
                            </div>
                                
                            <hr />
                    <Card>
                        <Card.Header as="h5" align="center">Trending</Card.Header>
                        <br />
                                <Card.Body>
                                    <div class="card mt-4">
                                        <div class="row">
                                            <div class ="col-md-4">
                                                <img src={pic1} height="132px" width="100px"/>
                                            </div>
                                                <div class="col-md-8">
                                                    <h6 class="card-title mt-3"><b>Special title treatment</b></h6>
                                                        <p align="justify">
                                                            With supporting text below as a natural lead-in to additional content.
                                                        </p>
                                                </div>
                                        </div>
                                    </div>
                                    </Card.Body><hr />
        
                    <Card.Body>
                    <div class="card mt-4">
                        <div class="row">
                            <div class ="col-md-4">
                                <img src={pic1} height="132px" width="100px"/>
                            </div>
                                <div class="col-md-8">
                                    <h6 class="card-title mt-3"><b>Special title treatment</b></h6>
                                        <p align="justify">
                                            With supporting text below as a natural lead-in to additional content.
                                        </p>
                                </div>
                        </div>
                    </div>
                    </Card.Body><hr />
        
                    <Card.Body>
                    <div class="card mt-4">
                        <div class="row">
                            <div class ="col-md-4">
                                <img src={pic1} height="132px" width="100px"/>
                            </div>
                                <div class="col-md-8">
                                    <h6 class="card-title mt-3"><b>Special title treatment</b></h6>
                                        <p align="justify">
                                            With supporting text below as a natural lead-in to additional content.
                                        </p>
                                </div>
                        </div>
                    </div>
                    </Card.Body><hr />
        
                    <Card.Body>
                    <div class="card mt-4">
                        <div class="row">
                            <div class ="col-md-4">
                                <img src={pic1} height="132px" width="100px"/>
                            </div>
                                <div class="col-md-8">
                                    <h6 class="card-title mt-3"><b>Special title treatment</b></h6>
                                        <p align="justify">
                                            With supporting text below as a natural lead-in to additional content.
                                        </p>
                                </div>
                        </div>
                    </div>
                    </Card.Body><hr />
        
        
        <br />
        <br />
        <br /><br />
          <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item me-4">
                                        <a href="#!"><i class="bi-facebook fs-3"></i></a>
                                    </li>
                                    <li class="list-inline-item me-4">
                                        <a href="#!"><i class="bi-twitter fs-3"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#!"><i class="bi-instagram fs-3"></i></a>
                                    </li>
                                </ul>
                            </div>
        </Card>
        
                            </div>
                    {/* <div class="card mb-4">
                        <div class="card-header">Search</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-4">
                        <div class="card-header">Categories</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                   
                    {/* <div class="card mb-4">
                        <div class="card-header">Side Widget</div>
                        <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div> */}
                </div>
            </div>
        </div>
        </div>
    ); 
}