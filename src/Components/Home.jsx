import Recommend from "./Recommend"
import Trending from "./Trending"


const Home = () => {
  return (
    <div className="md:ml-36 md:m-8 p-4 mt-32 md:mt-24 max-w-[90%]   ">
        <h1 className="text-white text-2xl font-light md:text-4xl mb-2">Trending</h1>
        <Trending/>
        <h2 className="text-white text-2xl font-light md:text-4xl ">Recommended for you</h2>
        <Recommend/>
    </div>
  )
}

export default Home