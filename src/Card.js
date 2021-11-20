function Card(props){
    return(
        <div className="card">
            <img src={props.url_download}  width="400"  alt="" />
            <p> {props.author}</p>
            <a href={props.url}></a>
        </div>
    )
}

export default Card