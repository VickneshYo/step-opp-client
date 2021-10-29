import React from 'react'
import Form from 'react-bootstrap/Form'
import '../App.css';


export default function Contact() {
    return (
        <div > 
             <header class="bg-dark py-1 mb-4">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder"> Contact Us </h1>
                    <p class="lead fw-normal text-white-50 mb-0"> Opportunities don't happen, you create them</p>
                </div>
            </div>
        </header>

        <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label id="full-name"> Full Name </Form.Label>
            <Form.Control type="text" placeholder="Enter your name"  />      
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label id="email"> Email </Form.Label>
            <Form.Control type="email" placeholder="Enter your email"  />      
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label id="subject"> Subject </Form.Label>
            <Form.Control type="text" placeholder="Enter subject"  />      
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={6} placeholder="Your Comments here . . ."/>
          </Form.Group>
          <button type="button" class="btn btn-secondary btn-dark btn-lg btn-block w-100" style={{marginBottom:"20px"}}>Send</button>
        </Form>
        </div>
            
        </div>
    )
}





