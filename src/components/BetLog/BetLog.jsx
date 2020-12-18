import "./BetLog.scss";
import store from "../../store/store";
import Bet from "../Bet/Bet";

function BetLog() {
  const betElement = store.data.map((item) => (
    <Bet
      data={item}
      key={item.id}
      spoilerData={store.spoilerData}
      isWon={item.isWon}
    />
  ));

  return (
    <div className="BetLog">
      <h2 className="BetLog__title">Bets</h2>
      <div className="BetLog__content">

        <ul className="BetLog__list"> {betElement}</ul>

        <div className="BetLog__scroll"></div>
      </div>
    </div>
  );
}

export default BetLog;
