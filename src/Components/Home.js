import React, { useEffect, useState } from "react";
import dice from "../icon-dice.svg";

function Home(props) {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(115);

  function adviceId(min = 1, max = 220) {
    setId(Math.floor(Math.random() * (max - min) + min));
  }

  console.log(id);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${id}}}`)
      .then((res) => res.json())
      .then((res) => setItems(res.slip));
  }, [id]);

  return (
    <>
      <div className="home">
        <div className="advice-box">
          <p className="advice-number">Advice #{items.id}</p>
          <h2 className="advice-content">"{items.advice}"</h2>
          <div className="hr">
            <hr />
            <span className="symbol">=</span>
            <hr />
          </div>

          <button onClick={() => adviceId()} className="btn">
            <img src={dice} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
