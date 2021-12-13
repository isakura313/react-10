import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Article.sass";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    <div className="min-h-screen w-1/2 mx-auto pt-20 article_wrapper ">
      <h1 className="text-lg text-center font-medium pb-6">
        {articleInfo.title}
      </h1>
      <ReactMarkdown
        children={articleInfo.content}
        remarkPlugins={[remarkGfm]}
        className="isolate container border-2 border-solid border-black p-6"
      />
      <div>
        {" "}
        ❤️ {articleInfo.likes} {articleInfo.author}
      </div>
    </div>
  );
}

export default Article;
