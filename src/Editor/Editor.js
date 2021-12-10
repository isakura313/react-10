import { useState } from "react";
import "./Editor.sass";
import axios from "axios";
function Editor() {
  const [valueName, setValueName] = useState("пример тайтла");
  const [valueAuthor, setValueAuthor] = useState("Иван");
  const [valueContent, setValueContent] = useState("содержимое");
  const postData = async () => {
    await axios({
      method: "POST",
      url: "http://localhost:5000/posts",
      data: {
        title: valueName,
        content: valueContent,
        author: valueAuthor,
      },
    });
  };

  async function createArticle() {
    await postData();
    alert("статья создана");
  }
  function handleChange(e) {
    if (e.target.name == "title") {
      setValueName(e.target.value);
    } else if (e.target.name == "nameAuthor") {
      setValueAuthor(e.target.value);
    } else if (e.target.name == "content") {
      setValueContent(e.target.value);
    }
  }
  return (
    <div className="editor_wrapper">
      <label htmlFor="title">Заголовок</label>
      <input
        type="text"
        name="title"
        value={valueName}
        onChange={handleChange}
        className="editor__input"
      />
      <label htmlFor="nameAuthor">Имя автора</label>
      <input
        type="text"
        name="nameAuthor"
        value={valueAuthor}
        onChange={handleChange}
        className="editor__input"
      />
      <label htmlFor="content">Контент</label>
      <textarea
        name="content"
        id="content"
        cols="20"
        rows="20"
        className="editor__textarea"
        value={valueContent}
        onChange={handleChange}
      ></textarea>
      <button onClick={createArticle}> Создать статью</button>
    </div>
  );
}
export default Editor;
