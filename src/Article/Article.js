import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Article.sass";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Article() {
  const { id } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  console.log(`http://localhost:5000/posts/${id}`);
  useEffect(() => {
    const getInfo = async () => {
      const res = await axios({
        method: "GET",
        url: `http://localhost:5000/posts/${id}`,
      });
      setArticleInfo(res.data);
    };
    getInfo();
  }, []);
  return (
    <div className="article_wrapper">
      <ReactMarkdown children={`${articleInfo.title} ${articleInfo.content}`} />
      <div> ❤️ {articleInfo.likes}</div>
    </div>
  );
}

export default Article;
