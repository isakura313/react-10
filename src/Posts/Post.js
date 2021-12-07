import './post.sass';
import { Link, Routes, Route, Router} from "react-router-dom";

function Post(props){
    return(
        <div>
            <Link to={`post/${props.id}`} key={props.id}>
            <h3>{props.title}</h3>
            </Link>
           
            <p> {props.body}</p>
            <div> ❤️ {props.likes} </div>
            <div> {props.author}</div>
        </div>
    )
}
export default Post