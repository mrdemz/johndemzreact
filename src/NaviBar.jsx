import React,{Component, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HashRouter, Routes, Route,Link} from "react-router-dom";


import "./navibar.css"
import demzlogo from "./images/demzlogo.png";
import Home from "./Home";
import Project from "./Project";
import About from "./About"
import Skills from "./Skills";
import Contact from "./Contact";
import Chat from "./Chat";
function NaviBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


  return (
   
   
    <HashRouter >
    <Navbar style={{display:"flex",width:"100%"}}   sticky="top" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand style={{display:"block"}}><img id="nav-logo" src={demzlogo} alt="John Demz"/></Navbar.Brand>
      <Nav style={{width:"100%"}}>
        <div className="wrapper">
          <ul>
            <li><b className="bi bi-house">
            <Link className="a" to="/"><i >Home</i></Link></b></li>
            <li><b  className="bi bi-person">
              <Link className="a" to="about"><i >About</i></Link></b></li>
              <li><b  className="bi bi-gear">
              <Link className="a" to="skills" ><i >Skills</i></Link></b></li>
              <li><b  className="bi bi-envelope">
              <Link className="a" to="contact" ><i >Contact</i></Link></b></li>
              <li><b  className="bi bi-kanban">
              <Link className="a"  onClick={handleShow} ><i >Projects</i></Link></b></li>
          </ul>
        </div>
      </Nav>
    </Container>
  </Navbar>
  <Offcanvas show={show} onHide={handleClose} placement={'end'} className="offcanv-style">
        <Offcanvas.Header  closeButton >
          <Offcanvas.Title style={{font:"2em/1 'Helvetica Neue', sans-serif"}}>Projects</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {<Project/>}
        </Offcanvas.Body>
      </Offcanvas>


  
      <Routes> 
        <Route index element={<Home/>}/>   
       <Route path="/" element={<Home/>}></Route>
       <Route path="about" element={<About/>}> </Route>
        <Route   path="skills" element={<Skills/>}> </Route>
        <Route   path="contact" element={<Contact/>}> </Route>
        <Route  path="johndemz-developer" element={<Chat/>}> </Route>
      </Routes>
    </HashRouter>

  );
}

export default NaviBar;