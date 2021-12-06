// import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import './Article.sass';

function Article({}){
    const { id } = useParams();
return (
    <div className='wrapper_article'>
        hello
       {id}
    </div>
)
}

export default Article;