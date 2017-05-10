class Home extends React.Component {
  render () {
    return (
      <div>
        <NavBar currentUser={this.props.currentUser} />
        {this.props.currentUser ?
          <UserDashboard currentUser={this.props.currentUser}/> :
          <About />
        }
        {this.props.children}
      </div>
    )
  }
}
export default Home;
