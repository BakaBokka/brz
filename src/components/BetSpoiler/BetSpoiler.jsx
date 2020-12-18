import "./BetSpoiler.scss";

function BetSpoiler({ data }) {
  return (
    <div className="BetSpoiler">
      <div className="BetSpoiler__info">
        <div className="BetSpoiler__wrap">
          <p className="BetSpoiler__time">{data.time}</p>
          <div className="BetSpoiler__bet">
            <p className="BetSpoiler__status">{data.status}</p>
            <p className="BetSpoiler__summ">{data.bet}</p>
          </div>
        </div>
        <div className="BetSpoiler__coef-wrap">
          <p className="BetSpoiler__coef">{data.coef}</p>
          <img className="BetSpoiler__icon" src={data.icon.img} alt="иконка" />
        </div>
      </div>
    </div>
  );
}

export default BetSpoiler;
