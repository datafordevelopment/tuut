import { h } from 'preact'
import App from './components/app'
import tuut from './tuut'

const app = tuut()

app.model({
  reducers: {
    update: (action, state) => ({
      title: action.value,
    }),
  },
  state: {
    title: 'Set the title',
  },
})

app.view((state, send) => (
  <App {...state} send={send} />
))

app.start()
