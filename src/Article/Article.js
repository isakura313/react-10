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
    <div className="min-h-screen pt-20 article_wrapper ">
      <h1 className="text-lg text-center font-medium pb-6">
        {articleInfo.title}
      </h1>
      <article className='prose prose-indigo w-5/6  mx-auto'>
      <ReactMarkdown
        children={articleInfo.content}
        remarkPlugins={[remarkGfm]}
        className="isolate container p-6"
      />
          </article>
      <div>
        {" "}
        ❤️ {articleInfo.likes} {articleInfo.author}
      </div>
    </div>
  );
}

export default Article;
