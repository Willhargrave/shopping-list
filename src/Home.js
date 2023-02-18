import React from "react";
import Sushi from "./components/Sushi";
import Card from "./components/Card";
import "./styles/App.css";

const Home = () => {

    return (
        <div>
            <div className="home-title">
                <h1>Welcome to Sushi Server!</h1>
            </div>
            <div className='Grid'>
                {Sushi.map((sushi) => <Card key={sushi.key} sushi={sushi} />)}
            </div>
        </div>

    )
}

export default Home;

