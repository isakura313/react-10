import "./Card.sass"

function Card(props){
    return(
        <div className="card">
            <div style={{backgroundImage: `url(${props.img_link})`}} alt={props.title} className='card__img'/>
            <a href={props.url} className='card__link'>{props.author}</a>
        </div>
    )
}
export default Card