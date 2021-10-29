import './css/homeStyle.css';
import './css/browseOpp.css';
import './js/home';
import img1 from './assets/img/testimonials-1.jpg';
import img2 from './assets/img/testimonials-2.jpg';
import img3 from './assets/img/testimonials-3.jpg';
import showcase1 from './assets/img/bg-showcase-1.jpg'
import showcase2 from './assets/img/bg-showcase-2.jpg';
import showcase3 from './assets/img/bg-showcase-3.jpg';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Nav } from 'react-bootstrap';
import opp7 from '../Photos/opp5.jpg';



export default function Home() {
    return (
        <div>
   
        <header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            
                            <h1 class="mb-5">Explore the Opportunities!</h1>
                    
                            <form class="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                           
                                <div class="row">
                                    <div class="col">
                                    {/* <DropdownButton  title="Opportunities" className="btn btn-primary btn-lg" style={{margin:"20px"}}>
                                        <Dropdown.Item> Workshops </Dropdown.Item>
                                        <Dropdown.Item as="button"> Challenges</Dropdown.Item>
                                        <Dropdown.Item as="button"> Jobs </Dropdown.Item>
                                        <Dropdown.Item as="button"> Conferences </Dropdown.Item>
                                        </DropdownButton>

                                        <DropdownButton  title="Categories" className="btn btn-primary btn-lg" style={{margin:"20px"}} >
                                        <Dropdown.Item> School leavers </Dropdown.Item>
                                        <Dropdown.Item as="button"> Under graduates </Dropdown.Item>
                                        <Dropdown.Item as="button"> Graduates</Dropdown.Item>
                                        <Dropdown.Item as="button"> Job seekers </Dropdown.Item>
                                        </DropdownButton> */}

<div class="row">
                                    <div class="col">
                                        <input class="form-control form-control-lg" id="emailAddress" type="email" placeholder="Keywords" data-sb-validations="required,email" />
                                        {/* <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div class="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div> */}
                                    </div>
                                    <div class="col-auto"><button class="btn btn-primary btn-lg" type="button" href="/browseopp">Search</button></div>
                                   </div>
                                        
                                        {/* <button class="btn btn-primary btn-lg" id="submitButton" type="submit" style={{marginLeft:"30px"}}>Search</button> */}
    
                                    </div>
                        
                                </div>
                           
                               
                           
                                {/* <div class="d-none" id="submitSuccessMessage">
                                    <div class="text-center mb-3">
                                        <div class="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div> */}
                       
                                {/* <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
       
        <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-window m-auto text-primary"></i></div>
                            <h3>Easy Understandable</h3>
                            <p class="lead mb-0">All the opportunities posted here are Easily Understandable!</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-layers m-auto text-primary"></i></div>
                            <h3>All at One Place</h3>
                            <p class="lead mb-0">Featuring all available opportunities under a single Roof!</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-terminal m-auto text-primary"></i></div>
                            <h3>Visual Guideline</h3>
                            <p class="lead mb-0">You can find the Visual Guideline for every opportunities!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       {/* <div class="Row nav-category">
        
  
  <Nav className="justify-content-center " activeKey="/home">
    <Nav.Item>
      <Nav.Link style={{color:"white"}} href="/browseopp"> Competitions </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color:"white"}} href="/browseopp" eventKey="link-1"> Conferences </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color:"white"}}  href="/browseopp"eventKey="link-2"> Exchange programs </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color:"white"}} href="/browseopp" eventKey="Link-3" > Internships </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color:"white"}} href="/browseopp" eventKey="link-4"> Scholarship </Nav.Link>
    </Nav.Item>
  </Nav>
  

       </div> */}
{/* 
        <div class="Row">
           <div class="col-lg-6">

           </div>
       </div>
        
        <section class="showcase">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url(${showcase1})`}}></div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Fully Responsive Design</h2>
                        <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div> 
                <div class="row g-0">
                    <div class="col-lg-6 text-white showcase-img" style={{backgroundImage: `url(${showcase2})`}}></div>
                    <div class="col-lg-6 my-auto showcase-text">
                        <h2>Updated For Bootstrap 5</h2>
                        <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url(${showcase3})`}}></div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Easy to Use & Customize</h2>
                        <p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </section> */}

        {/* <div>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp7} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 1</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/browseopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp7} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 2</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/browseopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp7} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 3</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/browseopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                     <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp7} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 4</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/browseopp">Explore</a></div>
                            </div>
                        </div>
                    </div> 
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp7} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 5</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/browseopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp7} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 6</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/browseopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp7} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 7</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/browseopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp7} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 8 </h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/browseopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
      
        </div> */}
       
        <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src={img1} alt="..." />
                            <h5>Margaret E.</h5>
                            <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src={img2} alt="..." />
                            <h5>Fred S.</h5>
                            <p class="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src={img3} alt="..." />
                            <h5>Sarah W.</h5>
                            <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <section class="call-to-action text-white text-center" id="signup">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <h2 class="mb-4">Ready to get started? Sign up now!</h2>
                       
                        <form class="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                            
                            <div class="row">
                                <div class="col">
                                    <input class="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                    <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                                    <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                                </div>
                                <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                            </div>
                      
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    <p>To activate this form, sign up at</p>
                                    <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        */}
       
        </div>
    );
}