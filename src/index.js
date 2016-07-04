import App from './components/app'
import tuut from './tuut'

const app = tuut()

app.model({
  effects: {
    update: (state, action, send) => {
      setTimeout(() => send('time', { time: new Date }), 1000)
    },
  },

  reducers: {
    time: (action, state) => ({
      now: `${action.time}: ${state.title}`,
    }),

    update: action => ({
      title: action.value,
    }),
  },

  state: {
    now: new Date,
    title: 'Set the title',
  },
})

app.view((state, send) => (
  <App {...state} send={send} />
))

document.body.appendChild(app.start())
