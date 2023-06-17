import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function AddStudent({users,setUsers}){

   let navigate=useNavigate();
   let params=useParams()

  //  console.log(params)

  let [name,setName]=useState("");
  let [rollno,setRollno]=useState("");
  let [department,setDepartment]=useState("");
  let [attendance,setAttendance]=useState("");
  let [cgpa,setCgpa]=useState("");
  let [incharge,setIncharge]=useState("");

  let handleSubmit=()=>{

    let newUser={name, rollno, department,attendance,cgpa,incharge}
    let newArray=[...users]

    if(params.id !== undefined)
    {
      newArray.splice(params.id,1,newUser)
    }
    else
    {
      newArray.push(newUser)
    }
    {/*newArray.push(newUser)*/}
  setUsers(newArray)

    navigate('/student-details')

    
    console.log(newUser)

  }

  useEffect(()=>{
    if(params.id !== undefined)
    {
      setName(users[params.id].name)
      setRollno(users[params.id].rollno)
      setDepartment(users[params.id].department)
      setAttendance(users[params.id].attendance)
      setCgpa(users[params.id].cgpa)
      setIncharge(users[params.id].incharge)
    }
  },[params.id,users])

    return<>
    <div className="formdiv" style={{backgroundColor:'#b3b3e3', width:"100%", padding:'50px' }}>
    <h4 className="sd" style={{backgroundColor:'#b3b3e3', width:'100%', fontSize:'40px', textAlign:'center', color:'black'}}>Add students details</h4>
    <Form>
    <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value )}/>
      </Form.Group>
      <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>Roll.No:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="Enter Roll number" value={rollno} onChange={(e)=>setRollno(e.target.value )}/>
      </Form.Group>
      <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>Department:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="Enter Department" value={department} onChange={(e)=>setDepartment(e.target.value )}/>
      </Form.Group>
      <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>Attendance percentage:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="Enter percentage" value={attendance} onChange={(e)=>setAttendance(e.target.value )} />
      </Form.Group>
      <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>CGPA:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="perfomance percentage" value={cgpa} onChange={(e)=>setCgpa(e.target.value )} />
      </Form.Group>
      <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>student Incharge:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="Incharge name"  value={incharge} onChange={(e)=>setIncharge(e.target.value )}/>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Add Student
      </Button>
  
    </Form>

    </div>
   
   
    
    </>
}
export default AddStudent