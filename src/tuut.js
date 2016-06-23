import { h, render, Component } from 'preact'

export default function tuut() {
  let reducers = {}
  let state = {}
  let viewCallback = null

  return {
    model,
    start,
    view,
  }

  function model(model) {
    state = model.state
    reducers = model.reducers
  }

  function start() {
    render(
      <Tuut
        reducers={reducers}
        state={state}
        viewCallback={viewCallback} />,
      document.body
    )
  }

  function view(callback) {
    viewCallback = callback
  }
}

class Tuut extends Component {
  constructor({ state }) {
    super()
    this.state = state
  }

  send(type, action) {
    this.setState(this.props.reducers[type](action, this.state))
  }

  render({ viewCallback }, state) {
    return viewCallback(state, ::this.send)
  }
}
