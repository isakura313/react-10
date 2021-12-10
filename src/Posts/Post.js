import "./post.sass";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Post(props) {
  return (
    <div>
      <Link to={`${props.id}`}>
        <h3>{props.title}</h3>{" "}
      </Link>
      <p>
        {" "}
        <ReactMarkdown>{props.body} </ReactMarkdown>
      </p>
      <div> ❤️ {props.likes} </div>
      <div> {props.author}</div>
    </div>
  );
}
export default Post;
