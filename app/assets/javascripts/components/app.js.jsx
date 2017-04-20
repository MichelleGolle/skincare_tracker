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
        <Route exact path='/' render={()=><Home currentUser={currentUser}/>}>
          <Route path='/login' />
          <Route path='/logout' />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App;
