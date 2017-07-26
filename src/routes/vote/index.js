import { h, Component } from 'preact'
import style from './style'

export default class Vote extends Component {
  componentDidMount () {
    // Deepstream get from votingId
    console.log('a', this.props.votingId)
  }

  componentWillUnmount () {
    // Deepstream disconnect client
  }

  render ({ votingId }) {
    return (
      <div class={style.profile}>
        <h1>
          Voting page for {votingId}
        </h1>
        <p>
          {votingId}.
        </p>
      </div>
    )
  }
}
