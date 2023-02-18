import "../styles/Card.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import ItemContext from "./ItemContext";
const Card = (props) => {
    const [cartItems, setCartItems] = useContext(ItemContext);
    return (
        <div className="Card">
            <button className='CardButton'>
                <Link to={`/${props.sushi.key}`} className="link">
                    <img src={props.sushi.img} alt='' className='CardImg' />
                    <h2>{props.sushi.name}</h2>
                </Link>
            </button>
        </div >

    )
}




export default Card;