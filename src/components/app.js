import { h } from 'preact'

export default ({ send, title }) => (
  <div>
    <h1>{title}</h1>
    <input onKeyUp={e => send('update', { value: e.target.value })} />
  </div>
)
