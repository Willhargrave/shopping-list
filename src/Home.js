import React, { useState } from "react";
import Sushi from "./components/Sushi";
import Card from "./components/Card";
import "./styles/App.css"
const Home = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <header>
                <h1>🥚<span>{count}</span></h1>
                <h1>Don't pick the same guy twice!</h1>
            </header>
            <h1>Home</h1>
            <div className='Grid'>
                {Sushi.map((sushi) => <Card key={sushi.id} sushi={sushi} handleClick={handleClick} />)}
            </div>
        </div>
    )
}

export default Home;