import { render } from 'preact'
import Main from './main'

export default function tuut() {
  let context = null

  return {
    model(config) {
      context = config
    },

    start() {
      return renderMain(context)
    },

    view(view) {
      context.view = view
    },
  }
}

function renderMain(context) {
  const element = document.createElement('div')

  if (!context) {
    throw Error('App not initialized')
  }

  render(<Main {...context} />, element)

  return element
}
