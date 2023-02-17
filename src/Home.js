import React from "react";
import Sushi from "./components/Sushi";
import Card from "./components/Card";
import "./styles/App.css";

const Home = (e) => {

    return (
        <div>
            <div className='Grid'>
                {Sushi.map((sushi) => <Card key={sushi.key} sushi={sushi} />)}
            </div>
        </div>

    )
}

export default Home;

