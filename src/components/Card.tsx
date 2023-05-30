import { useState } from "react";

const Card = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      setAdvice(data.slip.advice);
      setId(data.slip.id);
    });

  const handleClick = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      });
  };

  return (
    <>
      <div className="card">
        <p className="id">advice #{id}</p>
        <p className="advice">
          <span className="quote">"</span>
          {advice}
          <span className="quote">"</span>
        </p>
        <img
          className="divider"
          src="/images/pattern-divider-desktop.svg"
          alt="divider"
        />
        <button onClick={handleClick}>
          <img src="/images/icon-dice.svg" alt="dice" />
        </button>
      </div>
    </>
  );
};

export default Card;
