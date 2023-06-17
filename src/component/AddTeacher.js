import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function AddTeacher({teach,setTeach}){

    let navigate=useNavigate();
   let params=useParams()

  //  console.log(params)

  let [name,setName]=useState("");
  
  let [department,setDepartment]=useState("");
  
  let [results,setResults]=useState("");
  let [student,setStudent]=useState("");

  let handleSubmit=()=>{

    let newTeach={name,  department,results,student}
    let newArray=[...teach]

    if(params.id !== undefined)
    {
      newArray.splice(params.id,1,newTeach)
    }
    else
    {
      newArray.push(newTeach)
    }
    {/*newArray.push(newUser)*/}
  setTeach(newArray)

    navigate('/teacher-details')

    
    // console.log(newUser)

  }

  useEffect(()=>{
    if(params.id !== undefined)
    {
      setName(teach[params.id].name)
     
      setDepartment(teach[params.id].department)
      
      setResults(teach[params.id].results)
      setStudent(teach[params.id].student)
    }
  },[params.id,teach])
    return<>
    <div className="formdiv" style={{backgroundColor:'#b3b3e3', width:"100%", padding:'50px' }}>
    <h4 className="sd" style={{backgroundColor:'#b3b3e3', width:'100%', fontSize:'40px', textAlign:'center', color:'black'}}>Add Teachers details</h4>
    <Form>
    <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value )}/>
      </Form.Group>
      
      <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>Department:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="Enter Department" value={department} onChange={(e)=>setDepartment(e.target.value )}/>
      </Form.Group>
      <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>Result %:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="Enter percentage" value={results} onChange={(e)=>setResults(e.target.value )}/>
      </Form.Group>
      
      <Form.Group className="mb-3" style={{color:'black'}} controlId="formBasicPassword">
        <Form.Label>students:</Form.Label>
        <Form.Control className="boxe" style={{width:'50%'}} type="text" placeholder="student name"  value={student} onChange={(e)=>setStudent(e.target.value )} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} >
        Add Teacher
      </Button>
  
    </Form>

    </div>
   
   
    
    </>
}
export default AddTeacher