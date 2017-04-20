class Home extends React.Component {
  render () {
    return (
      <div>
        <NavBar currentUser={this.props.currentUser} />
        <About />
        {this.props.children}
      </div>
    )
  }
}
export default Home;
