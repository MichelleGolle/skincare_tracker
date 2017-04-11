class Home extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <About />
        {this.props.children}
      </div>
    )
  }
}
export default Home;
