import { h, Component } from 'preact'
import { Router } from 'preact-router'
import deepstream from 'deepstream.io-client-js'
import { DEEPSTREAM_URI } from '../constants'

import Header from './header'
// import Home from '../routes/home';
// import Profile from '../routes/profile';
import Home from 'async!../routes/home'
import Vote from 'async!../routes/vote'
// import Profile from 'async!./profile';

export default class App extends Component {
  constructor() {
    super()
    this.deepstream = null
  }
  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  handleRoute = e => {
    this.currentUrl = e.url
  }
  componentDidMount() {
    this.deepstream = deepstream(DEEPSTREAM_URI)
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Vote path="/vote/:votingId" />
        </Router>
      </div>
    )
  }
}
