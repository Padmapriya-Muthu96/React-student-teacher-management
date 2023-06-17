import React from "react";
import Sidebar from "./component/Sidebar";
import Dashboards from "./component/Dashboard1";
 import AddStudent from "./component/AddStudent";
 import StudentDetails from "./component/StudentDetails";
import  {BrowserRouter, Route, Routes, Navigate}  from "react-router-dom";
import { useState } from "react";
import AddTeacher from "./component/AddTeacher";
import TeachersDetail from "./component/TeachersDetails";

function App() {

  const [users,setUsers] = useState([

    {
      name:"Muthu M",
      rollno:"201301",
      department:"ECE",
      attendence:"90%",
      cgpa:"70%",
      incharge:"veera Ragavan"
    },

    {
      name:"Ratchagi M",
      rollno:"201302",
      department:"ECE",
      attendence:"89%",
      cgpa:"68%",
      incharge:"veera Ragavan"
    },

    {
      name:"Padmapriya M",
      rollno:"201303",
      department:"ECE",
      attendence:"90%",
      cgpa:"70%",
      incharge:"shiva"
    },

    {
      name:"Sivaraman S",
      rollno:"201304",
      department:"Mechanical",
      attendence:"92%",
      cgpa:"72%",
      incharge:"shiva"
    },

    {
      name:"Adhiran S",
      rollno:"201305",
      department:"CSE",
      attendence:"94%",
      cgpa:"80%",
      incharge:"murugan"
    },

    {
      name:"vamsi S",
      rollno:"201305",
      department:"IT",
      attendence:"94%",
      cgpa:"80%",
      incharge:"murugan"
    },

]);

let[teach,setTeach]=useState([
  {
      name:"Veera Ragavan",
      department:"ECE",
      results:"90%",
      student:"Muthu M"
  },
  {
      name:"Shiva",
      department:"CSE",
      results:"90%",
      student:"Racthagi M"
  },
  {
      name:"Murugan",
      department:"IT",
      results:"90%",
      student:"Padmapriya M"
  },
  {
      name:"kandhan",
      department:"Mechanical",
      results:"90%",
      student:"Sivaraman S"
  },
  
  
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
        <Sidebar/>
        <Routes>
        <Route path="/dashboard" element={<Dashboards/>}/>
        <Route path="/add-student" element={<AddStudent users={users} setUsers={setUsers}/>}/>
        <Route path="/edit-student/:id" element={<AddStudent users={users} setUsers={setUsers}/>}/>
        <Route path="/student-details" element={<StudentDetails users={users} setUsers={setUsers}/>}/>
        <Route path="/add-teacher" element={<AddTeacher teach={teach} setTeach={setTeach}/>}/>
        <Route path="/edit-teacher/:id" element={<AddTeacher teach={teach} setTeach={setTeach}/>}/>
        <Route path="/teacher-details" element={<TeachersDetail teach={teach} setTeach={setTeach}/>}/>
        <Route path="*" element={<Navigate to='/dashboard'/>}/>
       
       {/* <AddStudent/> */}
       </Routes>
    </div>
    </BrowserRouter>
    {/* <AddStudent/> */}
  </>
}

export default App;
