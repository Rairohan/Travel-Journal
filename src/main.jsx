import { createRoot } from 'react-dom/client'
import './index.css'
import Header from '../components/Header'
import App from '../components/App'
import Entry  from '../components/Entry'


createRoot(document.getElementById('root')).render(
  <>
  <Header/>
  <main className='container'>
    <Entry/>
  </main>
  </> 
)
