import './post.sass';
import { Link, Routes, Route, Router} from "react-router-dom";

function Post(props){
    return(
        <div>
            <Link to={`/${props.id}`} key={props.id}>
            <h3>{props.title}</h3>
            </Link>
           
            <p> {props.body}</p>
            <div> ❤️ {props.likes} </div>
            <div> {props.author}</div>
            {/* <Routes>
            <Route path='/article' element={<Article/>} />
            </Routes> */}
        </div>
    )
}
export default Post