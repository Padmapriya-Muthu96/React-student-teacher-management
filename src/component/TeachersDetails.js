import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TeachersDetail({teach,setTeach}){

    let navigate=useNavigate("")

   
{/*let[teach,setTeach]=useState([
{
    Name:"Veera Ragavan",
    Department:"ECE",
    Results:"90%",
    Student:"Muthu M"
},
{
    Name:"Shiva",
    Department:"CSE",
    Results:"90%",
    Student:"Racthagi M"
},
{
    Name:"Murugan",
    Department:"IT",
    Results:"90%",
    Student:"Padmapriya M"
},
{
    Name:"kandhan",
    Department:"Mechanical",
    Results:"90%",
    Student:"Sivaraman S"
},


])*/}
let handleDelete=(i)=>{
   let newArray=[...teach]
    newArray.splice(i,1)
    setTeach(newArray)
}

return<>

<div className="card-container">
       <div class="row">
       
        { teach.map((e,i)=> { return <Card key={i}>
            <div className="card-body" style={{backgroundColor:'#aac4f2'}}>
            
        <div className="card-content" style={{color:'black',backgroundColor:'#89b1c4',width:'300px',height:'300px',}}> 
        <Card.Body>
          <Card.Title>Name: {e.name}</Card.Title>
        
          <Card.Text>Department: {e.department} </Card.Text>
          <Card.Text>Result  : {e.results} </Card.Text>
          
          <Card.Text>Students: {e.student} </Card.Text>
          <a href="#" class="btn btn-primary" onClick={()=>navigate(`/edit-teacher/${i}`)}>Edit</a>
          <a href="#" class="btn btn-danger" onClick={()=>handleDelete(i)}>Delete</a>
          </Card.Body>
         
          </div>
          </div>
        </Card>
       
        

        

        }
        )
}

     </div>
     </div>
     

</>
}
export default TeachersDetail