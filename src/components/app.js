export default ({ now, send, title }) => (
  <div>
    <h1>{title}</h1>
    <h2>{now}</h2>
    <input onInput={e => send('update', { value: e.target.value })} />
  </div>
)
