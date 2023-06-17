import React from "react";
import { Card } from "react-bootstrap";
import App from "../App";
import { useNavigate } from "react-router-dom";

function StudentDetails({users,setUsers}){

  let navigate=useNavigate("")

  let handleDelete=(i)=>{
    let newArray=[...users]
    newArray.splice(i,1)
    setUsers(newArray)

  }
    return<>
       <div className="card-container">
       <div class="row">
       
        { users.map((e,i)=> { return <Card key={i}>
            <div className="card-body" style={{backgroundColor:'#aac4f2'}}>
            
        <div className="card-content" style={{color:'black',backgroundColor:'#89b1c4',width:'300px',height:'300px',}}> 
        <Card.Body>
          <Card.Title>Name: {e.name}</Card.Title>
          <Card.Text>Roll.No: {e.rollno} </Card.Text>
          <Card.Text>Department: {e.department} </Card.Text>
          <Card.Text>Attendance : {e.attendence} </Card.Text>
          <Card.Text>CGPA: {e.cgpa} </Card.Text>
          <Card.Text>Student Incharge: {e.incharge} </Card.Text>
          <a href="#" class="btn btn-primary" onClick={()=>navigate(`/edit-student/${i}`)}>Edit</a>
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

export default StudentDetails