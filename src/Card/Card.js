import './card.css';


function Card(props){
    const {url_download} = props;
    const style  ={
        backgroundImage: `url(${url_download}`
    }
    return(
        <div className="card">
            <div style={style} title={props.author}  className="card__img"  alt="photo" />
            {props.url_download}
            <p className="card__p"> {props.author}</p>
            <a className="card__link" href={props.url}></a>
        </div>
    )
}

export default Card