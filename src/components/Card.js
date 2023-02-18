import "../styles/Card.css"
import { Link } from "react-router-dom";
const Card = (props) => {
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