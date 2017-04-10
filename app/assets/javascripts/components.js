require( 'babel-polyfill' );

// Manually add components to window and global
// so that react_ujs and react-server can find them and render them.
window.Home = global.Home = require("./components/home.js.jsx").default
window.NavBar = global.NavBar = require("./components/navbar.js.jsx").default
window.About = global.About = require("./components/about.js.jsx").default
