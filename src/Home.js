import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/">
                <a>Home</a>
            </Link>
        </div>
    )
}

export default Home;