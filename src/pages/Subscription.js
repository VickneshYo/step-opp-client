import React from 'react'
import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Card } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Type } from 'react-bootstrap-icons'


function Subscription() {
    return (
        <div>
          <div>
            <header class="bg-dark py-1 mb-4">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder"> Subscribe Us </h1>
                    <p class="lead fw-normal text-white-50 mb-0"> Opportunities don't happen, you create them</p>
                </div>
            </div>
        </header>
          </div>
        
          

  <Card> <br /> <br />
   <div >
  <Form className="container">
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalName" >
    <Form.Label column sm={2}>
      Name :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="Name" placeholder="Type Name"  />
    </Col>
  </Form.Group>
  
<Form.Group as={Row} className="mb-3" controlId="formHorizontalDescription">
    <Form.Label column sm={2}>
      Phone No :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="Phone No" placeholder="Type Phone No" />
    </Col>
  </Form.Group>
 
<Form.Group as={Row} className="mb-3" controlId="formHorizontalE-mail">
    <Form.Label column sm={2}>
     E-mail :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="description" placeholder="example@gmail.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
    <Form.Label column sm={2}>
      Address :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="address" placeholder="Type Address" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalDOB">
    <Form.Label column sm={2}>
      Date Of Birth :-  {/* Date picker*/}
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="dob"  />
    </Col>
  </Form.Group>

<fieldset>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Gender :-
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
          <Form.Check
          type="radio"
          label="Other"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
  </Form.Group>
  </fieldset>

  

<fieldset>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        User Type :-
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="School Leavers"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Undergraduate"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
          <Form.Check
          type="radio"
          label="Graduate"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
  </Form.Group>
  </fieldset>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalInstitution">
    <Form.Label column sm={2}>
      Institution :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="institution" />
    </Col>
  </Form.Group>

    
  <fieldset>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
      Educational Qualification :-
      </Form.Label>
      <Col sm={3}>
      <Form.Control as="textarea" rows={5} />
      </Col>
  </Form.Group>
  </fieldset>

 <fieldset>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Opportunity Type :-
        </Form.Label>
 <Col sm={10}>             
{['checkbox'].map((type) => (      /*Check box 1*/
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={"Jobs"}
      />
    </div>
  ))}
 
 {['checkbox'].map((type) => (               /*Check box 2*/
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={"Challenges"}
      />
    </div>
  ))}


{['checkbox'].map((type) => (               /*Check box 3*/
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={"Competitions"}
      />
    </div>
  ))}


{['checkbox'].map((type) => (               /*Check box 4*/
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={"Workshops"}
      />
    </div>
  ))}


{['checkbox'].map((type) => (                 /*Check box 5*/
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={"Internships"}
      />
    </div>
  ))}
</Col>
</Form.Group>
</fieldset> 


<fieldset>                                     {/*Radio Button start*/} 
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Subscription Type :-
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Weekly"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Monthly"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
          <Form.Check
          type="radio"
          label="Yearly"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
  </Form.Group>
  </fieldset>

<Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
    <div class="text-center"><a class="btn btn-outline-dark mt-auto btn-block btn-lg w-100" href="#">Subscribe</a></div>
    </Col>
  </Form.Group>

  
</Form>
</div>
</Card>

        </div>
    )
}

export default Subscription
