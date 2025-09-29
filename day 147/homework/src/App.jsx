import data from "./data"
import Card from "./Card"


function App() {

  return (
    <div  className="bg-gray-500 flex gap-4 flex-wrap justify-center w-10xl h-10xl">
      {/* <h1>  Guitar shop Website</h1> */}
      {
        data.map((el) => {
          return (
            <Card 
              className="flex border-[3px] border-black p-2 rounded-lg transition-shadow w-100 h-100"
              key={el.id}
              name={el.name}
              price={el.price}
              color={el.color}
              img={el.image_url}
            />
          )
        })
      }
    </div>
  )
}

export default App
