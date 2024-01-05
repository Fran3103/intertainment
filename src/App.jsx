
import data from './data.json'

function App() {
  

  return (
    <>
      <h1 className='text-3xl text-red-400'>hola mundo</h1>
      
      {
        data.map((peli) => {
            return (
                <div key={peli.title}>
                    <img src={peli.thumbnail.regular.medium} alt={peli.title} />

                </div>
            )
        })
      }
    </>
  )
}

export default App
