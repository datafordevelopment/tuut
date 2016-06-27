import { h, render, Component } from 'preact'

export default function tuut() {
  const context = {}

  return {
    model({ reducers, state }) {
      context.reducers = reducers
      context.state = state
    },

    start() {
      render(
        <Tuut
          reducers={context.reducers}
          state={context.state}
          view={context.view} />,
        document.body
      )
    },

    view(view) {
      context.view = view
    },
  }
}

class Tuut extends Component {
  constructor({ state }) {
    super()
    this.state = state
  }

  send(type, action) {
    const reducer = this.props.reducers[type]

    if (!reducer) {
      throw Error('Could not find action ' + type)
    }

    this.setState(reducer(action, deepFreeze({ ...this.state })))
  }

  render({ view }, state) {
    return view(state, ::this.send)
  }
}

function deepFreeze(o) {
  Object.freeze(o)

  Object.getOwnPropertyNames(o).forEach(prop => {
    if (o.hasOwnProperty(prop)
    && o[prop] !== null
    && (typeof o[prop] === 'object' || typeof o[prop] === 'function')
    && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop])
    }
  })

  return o
}
