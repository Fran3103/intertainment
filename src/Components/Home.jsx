import Recommend from "./Recommend";
import PropTypes from 'prop-types'
import Trending from "./Trending";

// Recibe props como un objeto
const Home = (props) => {
    // Extrae añadirOEliminar del objeto props
    const { añadirOEliminar } = props;

    return (
        <div className="md:ml-36 md:m-8 p-4 mt-32 md:mt-24 max-w-[90%]">
            <h1 className="text-white text-2xl font-light md:text-4xl mb-2">Trending</h1>
            <Trending añadirOEliminar={añadirOEliminar} />
            <h2 className="text-white text-2xl font-light md:text-4xl">Recommended for you</h2>
            <Recommend />
        </div>
    );
};

Home.propTypes = {
    añadirOEliminar: PropTypes.func.isRequired, // Puedes ajustar el tipo según sea necesario
};

export default Home;
