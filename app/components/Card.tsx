// import css for styling the card
import { useEffect, useState } from "react";
import "../styles/card.css";

type props = {
  name: string;
  animal: string;
  founder: string;
  houseColors: string;
};

const Card = ({ name, animal, founder, houseColors }: props) => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");

  useEffect(() => {
    const colors = houseColors.split(" ");

    const cssColors = [
      "red",
      "green",
      "blue",
      "yellow",
      "orange",
      "purple",
      "pink",
      "black",
      "white",
      "gray",
      "silver",
      "gold",
      "brown",
      "cyan",
      "magenta",
      "darkRed",
      "lightGreen",
      "navy",
      "teal",
      "olive",
      "maroon",
      "aqua",
      "fuchsia",
      "slateGray",
      "coral",
      "whitesmoke",
    ];

    // if color1 is not included in cssColors return black
    if (!cssColors.includes(colors[0].toLowerCase())) {
      setColor1("black");
    } else {
      setColor1(colors[0].toLowerCase());
    }
    // if color2 is not included in cssColors return white
    if (!cssColors.includes(colors[2].toLowerCase())) {
      setColor2("white");
    } else {
      setColor2(colors[2].toLowerCase());
    }
  }, [houseColors]);
  console.log(color1, color2);

  return (
    <div className="card">
      <div className="header">
        <h1>{name}</h1>
        <p>{animal}</p>
      </div>
      <div
        className={`progress-bar`}
        style={{
          background: `linear-gradient(to right, ${color1}, ${color2})`,
        }}
      ></div>
      <p className="founderParagraph">
        Founder: <span className="founder">{founder}</span>
      </p>
    </div>
  );
};

export default Card;
