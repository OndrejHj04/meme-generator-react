import React from "react";
import data from "./data";

export default function Content() {
  const [text, setText] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP",
  });

  function change(event) {
    setText((oldVal) => ({
      ...oldVal,
      [event.target.name]: event.target.value,
    }));
  }

  const [meme, setMeme] = React.useState([]);

  React.useEffect(() => {
    setMeme(data);
  }, []);

  function submit(event) {
    event.preventDefault();
    const num = Math.floor(Math.random() * data.length);
    console.log(num);

    setText((oldVal) => {
      return {
        ...oldVal,
        randomImage: meme[num].url,
      };
    });
  }

  return (
    <div className="background">
      <div className="content">
        <form onSubmit={submit}>
          <div className="inputs">
            <input
              type="text"
              onChange={change}
              name="topText"
              value={text.topText}
            />
            <input
              type="text"
              onChange={change}
              name="bottomText"
              value={text.bottomText}
            />
          </div>

          <button>Get new meme image</button>
        </form>
        <div className="img-container">
          <p className="topText">{text.topText.toUpperCase()}</p>
          <p className="bottomText">{text.bottomText.toUpperCase()}</p>
          <img src={text.randomImage} className="meme" />
        </div>
        <h1 className="description">win + shift + s and paste to murdria discord</h1>
      </div>
    </div>
  );
}
