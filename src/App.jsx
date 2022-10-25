import ReactDOM from 'react-dom'
import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Stella" animal="Cat" breed="Domestic" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Doink" animal="Bird" breed="Cockatiel" />
    </div>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(App)
