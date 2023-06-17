import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    // let navigate=useNavigate;
  return <>
    <ul className="navbar-nav  sidebar sidebar-dark accordion" style={{backgroundColor:'#e398d9'}} id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center"  href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
    <i class="fa-sharp fa-solid fa-school-circle-check"></i>
    </div>
    <div className="sidebar-brand-text mx-3">Student-Teacher Management</div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>
{/*
{/* <!-- Heading -->
<div className="sidebar-heading">
    About
</div>

{/* <!-- Nav Item - Pages Collapse Menu -->


<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
       <i class="fa-solid fa-book-open-reader"></i>
        <span>Education</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa-solid fa-user-graduate"></i>
        <span>Results</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
     <i class="fa-solid fa-baseball"></i>
        <span>Sports</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa-sharp fa-solid fa-bus"></i>
        <span>Infrastructure</span>
    </a>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/> 

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Students
</div>
<Link to='/student-details'>
<li className="nav-item">
    <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
   <i class="fa-sharp fa-light fa-screen-users"></i>
        <span>Students Details</span>
    </a>
</li>
</Link>
<Link to='/add-student'>
<li className="nav-item">
    <a className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa-solid fa-user-plus"></i>
        <span>Add Student</span>
    </a>
</li>
</Link>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Teachers
</div>
<Link to='/teacher-details'>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
    <i class="fa-sharp fa-solid fa-person-chalkboard"></i>
        <span>Teachers Details</span>
    </a>
</li>
</Link>
<Link to='/add-teacher'>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa-solid fa-user-plus"></i>
        <span>Add Teacher</span>
    </a>
</li>
</Link>
</ul>
  </>
}

export default Sidebar
