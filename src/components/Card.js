import "../styles/Card.css"

const Card = (props) => {
    return (
        <div className="Card">
            <button className='CardButton' onClick={() => props.handleClick(props.sushi.id)}>
                <img src={props.sushi.img} alt='' className='CardImg' />
                <h2>{props.sushi.name}</h2>
            </button>
        </div>

    )
}


export default Card;