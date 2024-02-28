// import css for styling the card
import "../styles/card.css";

type props = {
  name: string;
  animal: string;
  founder: string;
};

const Card = ({ name, animal, founder }: props) => {
  return (
    <div className="card">
      <div className="header">
        <h1>{name}</h1>
        <p>{animal}</p>
      </div>
      <div className={`progress-bar ${name}`}></div>
      <p className="founderParagraph">
        Founder: <span className="founder">{founder}</span>
      </p>
    </div>
  );
};

export default Card;
