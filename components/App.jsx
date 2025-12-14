
import '/src/index.css'
import Header from '../components/Header'
import Entry from '../components/Entry'
import Data from "./Data"


export default function App() {
    const Entrydata = Data.map((entry)=>{
        return(
            <Entry
                key={entry.key}
                {...entry}
            />
        )
    })
  return (
    <>
      <Header />
      <main className="container">
        {Entrydata}
      </main>
    </>
  )
}
