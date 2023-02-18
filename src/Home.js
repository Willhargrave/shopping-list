import React from "react";
import Sushi from "./components/Sushi";
import Card from "./components/Card";
import "./styles/App.css";

const Home = () => {

    return (
        <div>
            <div className="home-title">
                <h1>Welcome!</h1>
                <p>🍣 Today's deal: EVERYTHING ￥300! 🍣</p>
            </div>
            <div className='Grid'>
                {Sushi.map((sushi) => <Card key={sushi.key} sushi={sushi} />)}
            </div>
        </div>

    )
}

export default Home;

