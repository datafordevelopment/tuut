import { Component } from 'preact'

export default class Main extends Component {
  constructor({ state }) {
    super()
    this.state = state
  }

  send(type, action) {
    const effect = this.props.effects[type]
    const reducer = this.props.reducers[type]
    const state = { ...this.state }

    if (!effect && !reducer) {
      throw Error('Could not find action ' + type)
    }

    if (process.env.NODE_ENV != 'production') {
      require('./utils').deepFreeze(state)
    }

    this.setState(reducer(action, state))
    effect && effect(state, action, ::this.send)
  }

  render({ view }, state) {
    return view(state, ::this.send)
  }
}
