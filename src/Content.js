import React from "react";

export default function Content() {
  const [text, setText] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function change(event) {
    setText((oldVal) => ({
      ...oldVal,
      [event.target.name]: event.target.value,
    }));
  }

  const [meme, setMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMeme(data.data.memes));
  }, []);

  function submit(event) {
    event.preventDefault();
    const num = Math.round(Math.random() * 100);
    setText(() => {
      return {
        topText: "",
        bottomText: "",
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
      </div>
    </div>
  );
}
