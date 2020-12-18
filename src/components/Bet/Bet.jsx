import "./Bet.scss";
import React, { useState } from "react";
import BetSpoiler from "../BetSpoiler/BetSpoiler";

function Bet({ data, spoilerData }) {
  const [active, setActive] = useState("");
  const [shown, setShown] = useState(false);

  function handleClick(id) {
    if (shown === false && data.isWon) {
      setShown(true);
      setActive(id);
    } else {
      setShown(false);
      setActive("");
    }
  }

  const betSpoilerElement = spoilerData.map((item) =>
    active === data.id ? <BetSpoiler data={item} key={item.id} /> : ""
  );

  console.log(data.icon.name);

  return (
    <li className="Bet" onClick={() => handleClick(data.id)}>
      <div className={data.isWon ?  "Bet__content Bet__content_won" : "Bet__content"}>
        <div className="Bet__conditions-wrap">
          <div className="Bet__info">
            <p className={data.isWon ? "Bet__id Bet__id_won" : "Bet__id"}>
              ID {data.id}
            </p>
            <p className={data.isWon ? "Bet__time Bet__time_won" : "Bet__time"}>
              {data.time}
            </p>
          </div>
          <div
            className={
              data.isWon
                ? "Bet__conditions Bet__conditions_won"
                : "Bet__conditions"
            }
          >
            <div className="Bet__options">
              <p
                className="Bet__option"
                style={{ color: `${data.options.first.color}` }}
              >
                {data.options.first.text}
              </p>
              {data.options.second.text ? (
                <span
                  className={
                    data.icon.name === "brick"
                      ? "Bet__option-divider Bet__option-divider_type_normal"
                      : "Bet__option-divider"
                  }
                >
                  or
                </span>
              ) : (
                ""
              )}
              <p
                className="Bet__option"
                style={{ color: `${data.options.second.color}` }}
              >
                {data.options.second.text}
              </p>
              {data.options.third.text ? (
                <span
                  className={
                    data.icon.name === "brick"
                      ? "Bet__option-divider Bet__option-divider_type_normal"
                      : "Bet__option-divider"
                  }
                >
                  or
                </span>
              ) : (
                ""
              )}
              <p
                className="Bet__option"
                style={{ color: `${data.options.third.color}` }}
              >
                {data.options.third.text}
              </p>
            </div>

            <div className="Bet__summs">
              <p className="Bet__summ">Bet: {data.bet}</p>
              <p className="Bet__payment">Paid: {data.payment}</p>
            </div>
          </div>
        </div>
        <div
          className={
            data.isWon ? "Bet__coef-wrap  Bet__coef-wrap_won" : "Bet__coef-wrap"
          }
        >
          <img className="Bet__icon.img" src={data.icon.img} alt="иконка" />
          <p className="Bet__coef">{data.coef}</p>
        </div>
      </div>
      {betSpoilerElement}
    </li>
  );
}

export default Bet;
