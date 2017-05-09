import {
  HashRouter as Router,
  Route,
  IndexRoute
} from 'react-router-dom'

class App extends React.Component {
  render () {
    const currentUser = this.props.currentUser;
    return (
      <Router>
        <Home currentUser={currentUser}>
          <Route path='/login' />
          <Route path='/logout' />
          <Route path='/users/dashboard' component={UserDashboard} />
        </Home>
      </Router>
    )
  }
}

export default App;
