import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Article.sass";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function Article() {
  const markdown = `Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  `;

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
      <h3> {articleInfo.title}</h3>
      <ReactMarkdown
      className='content__wrapper'
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={solarizedlight}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {articleInfo.content}
      </ReactMarkdown>
      <p>{articleInfo.author}</p>
      <div> ❤️ {articleInfo.likes}</div>
    </div>
  );
}

export default Article;
