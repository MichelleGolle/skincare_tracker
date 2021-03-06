import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


class NavBar extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Skincare Tracker</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          {this.props.currentUser ?
          <NavItem href="logout">{'Log Out'}</NavItem> :
          <NavItem href="login">{'Log In / Sign Up'}</NavItem>}
        </Nav>
      </Navbar>
    )
  }
}
export default NavBar;
