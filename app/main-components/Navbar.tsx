"use client"
import { LocationOn, NotificationsActive, ShoppingCartOutlined, MenuOutlined, SearchOutlined, Chat, HelpOutlined} from '@mui/icons-material';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge'
import Link from 'next/link';


export function NavbarUno() {
    const defaultSvgColor= ""
  return (
    <Navbar   className=" navbar-custom">
        <Navbar.Brand href="#home"> <MenuOutlined /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <li > <div className="location"><LocationOn  /> <p  >Hello <br/> <strong>Select Address</strong> </p> </div> </li>
            <li><InputGroup>
        <Form.Control type="search" aria-label="With add-ons"  className='shadow-none' />
        <InputGroup.Text><SearchOutlined style={{color:"white", fontSize:"35px"}} /></InputGroup.Text>
      </InputGroup></li>
            <div className="navicons-right">
            <li ><NotificationsActive  /></li>
            <li ><ShoppingCartOutlined  /></li>
            </div>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}



export function NavbarDos(){

return(
    <div  className="navbar-dos">
    <Link href={`/`}> <li>Home</li> </Link>
    <Link href={`/`}><li> Best Sellers</li></Link>
    <Link href={`/`}><li>Ujenzi Live</li></Link>
    <Link href={`/`}><li> New Hardware </li></Link>
    <Link href={`/`}><li>Gift Ideas</li></Link>
    <Link href={`/`}><li>Gift Cards </li></Link>
    
    <Badge pill bg="warning" >
    <Chat /> Feedback
  </Badge>
  <Badge pill bg="warning" >
  <HelpOutlined/>  Help Center
  </Badge>

</div>
)

}

export function Banner(){
    return(
        <div className="banner"> Yeah we got exclusive deals !! </div>
    )
}