// import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import './Article.sass';
import axios from 'axios';

function Article({}){
    const { id } = useParams();
    const [articleInfo, setArticleInfo] = useState({})
    useEffect(() => {   
        const getData = async () =>{
        const req = await axios({
          method: "GET",
          url: `http://localhost:5000/posts/${id}`
        })
        setArticleInfo(req.data)
      }
       getData();
      }, []);
return (
    <div className='wrapper_article'>
        <h3>{articleInfo.title}</h3>
       <p> {articleInfo.content}</p>
        <p> ❤️ {articleInfo.likes}</p> 
       <p>{articleInfo.author}</p> 
       {id}
    </div>
)
}

export default Article;