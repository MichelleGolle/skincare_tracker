import {
  HashRouter as Router,
  Route,
  IndexRoute
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Route exact path='/' component={Home}>
          <IndexRoute component={Home} />
          // TODO: need to change login route to match devise naming
          <Route path='/login' component={Login} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App;
