import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { Form, InputGroup } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import { ToggleButtonGroup } from 'react-bootstrap'
import { Switch } from 'react-router'


// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateTimePicker from '@mui/lab/DateTimePicker';
// import TextField from '@mui/material/TextField';








export default function Postopportunity() {

  // function App() {
  //   return (
  //     <LocalizationProvider dateAdapter={AdapterDateFns}>...</LocalizationProvider>
  //   );
  // }
  // const [value, setValue] = React.useState(new Date());

  // const history=useHistory();
  const [opps,setOpps]=useState({
    name:''})
    // desc:'',
    // oppType:'',
    // benifits:'',
    // applyLink:'',
    // eligibility:'',
    // hasDeadline:'',
    // deadline:'',
    // location:''})

    const handleSubmit = async(e)=>{

    e.preventDefault();    
    
    const newOpps = {
        name:opps.name,
        desc:opps.desc,
        oppType:opps.oppType,
        userType:opps.userType,
        benifits:opps.benifits,
        applyLink:opps.applyLink,
        //const images:opps.photo,
        eligibility:opps.eligibility,
        // hasDeadline:opps.hasDeadline,
        deadline:opps.deadline,
        location: opps.location
    }
    // console.log(newOpps); 
    const opportunities=await axios.post('http://localhost:8000/api/opportunities', newOpps)
 console.log(opportunities);
//  history.push("/Userprofile");
}
const handleChange = (e)=>{
    const {name,value} = e.target
    setOpps(oldOpp => {
        return{
            ...oldOpp,
            [name]:value
        }
    })
}
    return (
        <div>
            <div>
            <header class="bg-dark py-1 mb-4">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder"> Post an Opportunity </h1>
                    <p class="lead fw-normal text-white-50 mb-0"> Opportunities don't happen, you create them</p>
                </div>
            </div>
        </header>
          </div>
        
      <Card>
        <div classname="alert">
          <Alert variant="dark">
            <Alert.Heading><b>Hey, nice to see you </b></Alert.Heading>
            <p className="p1" align="justify">
            Have any opportunity that you would like to share with STEP Opps community?
            Please use this form to inform us about it. You can also mail us at stepopps@gmail.com.
            </p>
        <hr />
            <p className="p2" align="justify">
            By submitting opportunity to us, you are agreeing to these terms. Please read them carefully.
            <br /><br />
            (1) Information provided here is true and do not contain confidential information which would in anyway harm the concerned or other organization. Authenticity, validity and reliability of information shared are also ensured and the submitter takes full responsibilities of these,

            </p>
          </Alert>
        </div>
<br />
<Form className="container">
<div className="f1">
<Form.Group as={Row} className="mb-3" controlId="formHorizontalOppname">
    <Form.Label column sm={2}>
      Opportunity Name :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control name="name" placeholder="Type Opportunity Name"  value={opps.name}  onChange={handleChange} />
    </Col>
  </Form.Group>
  </div> <br />

  <fieldset>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Opportunity Description :-
      </Form.Label>
      <Col sm={3}>
      <Form.Control as="textarea" rows={3}  name="desc" placeholder="Type Description" value={opps.desc}  onChange={handleChange}/>
      </Col>
  </Form.Group>
  </fieldset>

    <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalOpportunitytype">
    <Form.Label column sm={2}>
      Opportunity Type :-
    </Form.Label>
    
    <Col sm={3}>
    {/* <Form.Control placeholder="Opportunity Type"  name="oppType" value={opps.oppType}  onChange={handleChange} /> */}
    <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Select Type :-
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark" name="oppType"  onChange={handleChange}>
      <Dropdown.Item href="#/action-1" active>
        Jobs
      </Dropdown.Item>
      <Dropdown.Item value={opps.oppType} href="#/action-2">Challenges</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Competitions</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Workshops</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Internships</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </Col>
  </Form.Group>
  </fieldset>
  <br />

<fieldset>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Benefits :-
      </Form.Label>
      <Col sm={3}>
      <Form.Control as="textarea" rows={3}  name="benifits" value={opps.benifits}  onChange={handleChange} />
      </Col>
  </Form.Group>
  </fieldset>

  <fieldset>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Eligibilities :-
      </Form.Label>
      <Col sm={3}>
      <Form.Control as="textarea" rows={3} name="eligibility" value={opps.eligibility}  onChange={handleChange} />
      </Col>
  </Form.Group>
  </fieldset>

 <Form.Group as={Row} className="mb-3" controlId="formHorizontalapplylink">
    <Form.Label column sm={2}>
      Apply Link :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="applylink"  name="applyLink" value={opps.applyLink}  onChange={handleChange}/>
    </Col>
  </Form.Group>

<fieldset>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Has Deadline :-
      </Form.Label>
      <Col sm={3}>
        {/*  <Form.Label className="switch">
            <InputGroup.Radio/>
            <InputGroup.Radio/>
            <span className="slider"/>
    </Form.Label>

    <div>
      <Switch className="react-switch"
        onChange ={this.handleChange}
        checked ={this.state.checked}  
        handleDiameter      
        />
    </div>*/}
     <Form.Control type="applylink"  name="hasDeadline" value={opps.hasDeadline}  onChange={handleChange}/>
      
      </Col>
      </Form.Group>
</fieldset>

  <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontaldeadline">
    <Form.Label column sm={2}>
      Deadline :-
    </Form.Label>
    <Col sm={3}>
      {/* <Form.Control type="deadline" value={opps.deadline}  onChange={handleChange}/> */}
      {/* <ControlLabel>Label</ControlLabel> */}
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider> */}
     
      {/* <HelpBlock>Help</HelpBlock> */}

      <Form.Control type="applylink"  name="deadline" value={opps.deadline}  onChange={handleChange}/>

    </Col>
  </Form.Group>

  {/*<LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="Helper text example"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => (
      <TextField {...params} helperText={params?.inputProps?.placeholder} />
    )}
  />
    </LocalizationProvider>*/}
  </fieldset>

  {/* <fieldset>
  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        For Further Details :-
      </Form.Label>
      <Col sm={3}>
      <Form.Control as="textarea" rows={3} />
      </Col>
  </Form.Group>
  </fieldset> */}

<fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalOpportunitytype">
    <Form.Label column sm={2}>
      Location :-
    </Form.Label>
    
    <Col sm={3}>
    <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Select
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark" value={opps.location}  onChange={handleChange}>
      <Dropdown.Item href="#/action-1" active>
        
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Colombo</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Kandy</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Galle</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Ampara</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Anuradhapura</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Badulla</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Batticaloa</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Gampaha</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Hambantota</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Jaffna</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Kalutara</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Kegalle</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Killinochchi</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Kurunegala</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Mannar</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Matale</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Matara</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Moneragala</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Mullativu</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Nuwara Eliya</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Polonnaruwa</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Puttalam</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Ratnapura</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Trincomalee</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Vavuniya</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
   {/* <Form.Control placeholder="Type Opportunity Name"   name="location" value={opps.location}  onChange={handleChange} /> */}
  </Col>
  </Form.Group>
  </fieldset>
  <br />
{/* 
  {/* <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontaldeadline">
    <Form.Label column sm={2}>
      Featured Image :-
    </Form.Label>
    <Col sm={3}>
      <Button variant="secondary"   >Upload image</Button>{' '}
    </Col>
    </Form.Group>
    </fieldset> */} 



  {/*<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
    <Form.Label>For Further Deatails :-</Form.Label>
    <Col sm={3}>
    <Form.Control as="textarea" rows={3} />
    </Col>
    </Form.Group>*/}

 <hr /><br />
  {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontaldeadline">
    <Form.Label column sm={2}>
      Organizers :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="programend" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontaldeadline">
    <Form.Label column sm={2}>
      Official Web Link :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="programend" placeholder="www.abc.com"/>
    </Col>
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontaldeadline">
    <Form.Label column sm={2}>
      Official Contact E-mail :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="e-mail" placeholder="example@gmail.com"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontaldeadline">
    <Form.Label column sm={2}>
      Person Name :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="personname" placeholder="Type Name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontaldeadline">
    <Form.Label column sm={2}>
      Person E-mail :-
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="persone-mail" placeholder="example@gmail.com"/>
    </Col>
  </Form.Group>

  <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontaldeadline">
    <Form.Label column sm={2}>
      Logo :-
    </Form.Label>
    <Col sm={3}>
      <Button variant="secondary">Upload image</Button>{' '}
    </Col>
    </Form.Group>
    </fieldset>*/}

 <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
    <div class="text-center"><button class="btn btn-outline-dark mt-auto btn-block btn-lg w-100" onClick={handleSubmit} >Post Opportunity</button></div>
    </Col>
  </Form.Group> 
</Form>

</Card>
        </div>
    )
}



