import React, { useState, useEffect } from "react";
import "./css/browseOpp.css";
import "./js/browseOpp";
import opp5 from "../Photos/opp5.jpg";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  generatePath,
  Switch,
  Route,
  useHistory,
  useParams,
  Redirect
} from "react-router-dom";

import axios from "axios";
import $ from "jquery";


export default function Browseopp() {

  const [opps, setOpps] = useState([]);
  const [filteredOpps, setfilteredOpps] = useState(opps);
  const [filterProps,setfilterProps] = useState({});
  const [id, setId] = useState();
  const [redirect, setRedirect] = useState(false);
  

  useEffect(() => {
  
    try {
      axios
        .get(`http://localhost:8000/api/opportunities/approved`)
        // .get(`http://localhost:8000/api/admin/opportunities`)
        .then((response) => {setfilteredOpps(response.data)
                      setOpps(response.data)});
        
    } catch (err) {
      // Handle Error Here
      console.error(err);
    } // };
  }, []);

  const handleOppCategory = (e)=>{
      setfilterProps({...filterProps,oppCategory:e})
  }
  

  const handleUserCategory = (e)=>{
    setfilterProps({...filterProps,userCategory:e})
}


const handleLocation = (e)=>{
  setfilterProps({...filterProps,location:e})
}
// console.log(filterProps);

const handleExplore =()=>{
  // if(filterProps.oppCategory){
  //   setfilteredOpps(opps.filter((i)=>{
  //     i.oppType == filterProps.oppCategory;
  //   }));
  // }
  // console.log(opps.filter((i)=>{
  //   i.oppType == filterProps.oppCategory;
  // }));
  let arr = []
  for(var i=0; i<opps.length; i++){
    if(filterProps.oppCategory === opps[i].oppType){
      // setfilteredOpps([...filteredOpps,opps[i]])
      arr.push(opps[i]);
    }
  }
   setfilteredOpps(arr);
   
}
console.log(filteredOpps);
const handleFilter =()=>{
  // // if(filterProps.oppCategory){
  // //   setfilteredOpps(opps.filter((i)=>{
  // //     i.oppType == filterProps.oppCategory;
  // //   }));
  // // }
  // // console.log(opps.filter((i)=>{
  // //   i.oppType == filterProps.oppCategory;
  // // }));
  let arr = []
  for(var i=0; i<opps.length; i++){
      arr.push(opps[i]);

  }
   setfilteredOpps(arr);
   
}


  // console.log(id);
  if (redirect) {
    return (<Redirect push to ={`/singleopp/${id}`}/>);
  
  }


  return (

    <div>
      <header class="bg-dark py-1 mb-4">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder"> Browse Opportunities </h1>
            <p class="lead fw-normal text-white-50 mb-0">
              {" "}
              Opportunities don't happen, you create them
            </p>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-lg-3 filter-dropdown">


           <DropdownButton
            id="dropdown-item-button"
            title={filterProps.oppCategory || "Opportunity Category"}
            onSelect={handleOppCategory}
          >
            <Dropdown.Item eventKey="Workshops"> Workshops</Dropdown.Item>
            <Dropdown.Item eventKey="Conferences"> Conferences</Dropdown.Item>
           <Dropdown.Item eventKey="Jobs"> Jobs</Dropdown.Item>
            <Dropdown.Item eventKey="Challenge"> Challenge </Dropdown.Item>
          </DropdownButton>
        </div>
{/* 
        <div className="row"> */}
        <div className="col-lg-3">
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <button class="btn btn-outline-dark mt-auto" onClick={handleExplore}>
                {" "}
                Explore{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <a class="btn btn-outline-dark mt-auto" onClick={handleFilter}>
                {" "}
                Reset filter
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}
        

        {/* <div className="col-lg-3 filter-dropdown">
          <DropdownButton id="dropdown-item-button" title={filterProps.userCategory || "User Category"} onSelect={handleUserCategory} >
            <Dropdown.Item eventKey="School leavers"> School leavers </Dropdown.Item>
            <Dropdown.Item eventKey="Undergraduates"> Under graduates </Dropdown.Item>
            <Dropdown.Item eventKey="Graduates"> Graduates </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="col-lg-3 filter-dropdown">
          <DropdownButton id="dropdown-item-button" title={filterProps.location|| "Location"} onSelect={handleLocation}>
            <Dropdown.Item eventKey="All Island">All Island</Dropdown.Item>
            <Dropdown.Item eventKey="Colombo">Colombo</Dropdown.Item>
            <Dropdown.Item eventKey="Jaffna">Jaffna</Dropdown.Item>
          </DropdownButton>
        </div> */}

        {/* <div className="col-lg-3 filter-dropdown">
          <DropdownButton id="dropdown-item-button" title="Deadline">
            <Dropdown.Item as="button" onClick={setfilterProps({...filterProps,oppCategory:"All Island"})}>Dropdown item text</Dropdown.Item>
            <Dropdown.Item as="button" onClick={setfilterProps({...filterProps,oppCategory:"All Island"})}>Action</Dropdown.Item>
            <Dropdown.Item as="button" onClick={setfilterProps({...filterProps,oppCategory:"All Island"})}>Another action</Dropdown.Item>
            <Dropdown.Item as="button" onClick={setfilterProps({...filterProps,oppCategory:"All Island"})}>Something else</Dropdown.Item>
          </DropdownButton>
        </div>*/}
      </div> 

  

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
           
            {filteredOpps.map((opportunity) => {
              var oppName   = opportunity.name;
              var deadline  = opportunity.deadline_date;
              var id        = opportunity._id;
              var img_url   = opportunity.image;
              return (
                <div class="col mb-5">
                  <div class="card h-100">
                    <img class="card-img-top h-50 border border-2 border-primary" src={img_url} alt="..." />

                    <div class="card-body p-4">
                      <div class="text-center">
                        <h5 class="fw-bolder"> {oppName}</h5>
                        <div class="small text-muted">{deadline}</div>
                      </div>
                    </div>

                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div class="text-center">
                        <a
                          class="btn btn-outline-dark mt-auto"
                         onClick={(e) => {
                            setId(id);
                            setRedirect(true);
                          }}
                        >
                          Explore
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp5} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 1</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/Singleopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp5} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 2</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/Singleopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp5} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 3</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/Singleopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp5} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 4</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/Singleopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp5} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 5</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/Singleopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp5} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 6</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/Singleopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp5} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 7</h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/Singleopp">Explore</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={opp5} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder"> Opportunity 8 </h5>
                                    <div class="small text-muted">January 1, 2021</div>
                                   
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/Singleopp">Explore</a></div>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </section>
      <nav aria-label="Pagination">
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
                    </nav>
    </div>
  );
}
