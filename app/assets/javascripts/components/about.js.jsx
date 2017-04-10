import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';

class About extends React.Component {
  render () {
    return (
      <Jumbotron className='jumbotron'>
        <h3>Welcome!</h3>
        <p>This is some introductory information about the app and what it does.</p>
        <p><Button bsStyle="info">Get Started</Button></p>
      </Jumbotron>
    )
  }
}

export default About;
