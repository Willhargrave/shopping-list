import { Link } from "react-router-dom";
import Sushi from "./components/Sushi";
import Card from "./components/Card";
import "./styles/App.css"
const Home = () => {
 
    return (
        <div>
            <h1>Home</h1>
            <div className='Grid'>
          {Sushi.map((sushi) => <Card key={sushi.id} sushi={sushi}/>)}
        </div>
        </div>
    )
}

export default Home;