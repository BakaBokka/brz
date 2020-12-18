import check from "../images/check.svg";
import clock from "../images/clock.svg";
import coinsWin from "../images/coins.svg";
import coins from "../images/coins_white.svg";
import back from "../images/back.svg";
import brick from "../images/brick.svg";

const store = {
  data: [
    {
      id: "00000",
      isWon: false,
      options: {
        first: { text: ` Offside `, color: "#D6B2FF" },
        second: { text: ` Free Kick `, color: "#A6DDFF" },
        third: { text: ` Goal Kick `, color: "#85F2EF" },
      },
      icon: { img: check, name: "check" },
      time: "18:53:36",
      bet: "1000 €",
      payment: "2799.32  €",
      coef: "2.7",
    },
    {
      id: "00001",
      isWon: false,
      options: {
        first: { text: "Goal", color: "#FFC6A6" },
        second: { text: ` Goal Kick `, color: "#85F2EF" },
        third: "",
      },
      icon: { img: clock, name: "clock" },
      time: "18:53:36",
      bet: "1000.00 €",
      payment: "2700.32  €",
      coef: "2.7",
    },
    {
      id: "086",
      isWon: true,
      options: {
        first: { text: "Goal", color: "#FFC6A6" },
        second: "",
        third: "",
      },
      icon: { img: coinsWin, name: "coinsWin" },
      time: "18:53:36",
      bet: "100  €",
      payment: "2500  €",
      coef: "25.5",
    },
    {
      id: "087",
      isWon: false,
      options: {
        first: { text: ` Offside `, color: "#D6B2FF" },
        second: "",
        third: "",
      },
      icon: { img: back, name: "back" },
      time: "18:53:36",
      bet: "1000.00 €",
      payment: "2700.32  €",
      coef: "2.7",
    },
    {
      id: "088",
      isWon: false,
      options: {
        first: { text: ` Free Kick `, color: "#A6DDFF" },
        second: { text: ` Corner Kick`, color: "#FEB2D5" },
        third: "",
      },
      icon: { img: brick, name: "brick" },
      time: "18:53:36",
      bet: "1000.00 €",
      payment: "2700.32  €",
      coef: "2.7",
    },
    {
      id: "089",
      isWon: false,
      options: {
        first: { text: ` Free Kick `, color: "#A6DDFF" },
        second: { text: ` Corner Kick`, color: "#FEB2D5" },
        third: "",
      },
      icon: { img: brick, name: "brick" },
      time: "18:53:36",
      bet: "1000.00 €",
      payment: "2700.32  €",
      coef: "2.7",
    },
    {
      id: "090",
      isWon: false,
      options: {
        first: { text: ` Free Kick `, color: "#A6DDFF" },
        second: { text: ` Corner Kick`, color: "#FEB2D5" },
        third: "",
      },
      icon: { img: brick, name: "brick" },
      time: "18:53:36",
      bet: "1000.00 €",
      payment: "2700.32  €",
      coef: "2.7",
    },
    {
      id: "091",
      isWon: false,
      options: {
        first: { text: ` Free Kick `, color: "#A6DDFF" },
        second: { text: ` Corner Kick`, color: "#FEB2D5" },
        third: "",
      },
      icon: { img: brick, name: "brick" },
      time: "18:53:36",
      bet: "1000.00 €",
      payment: "2700.32  €",
      coef: "2.7",
    },
  ],

  spoilerData: [
    {
      id: "1",
      time: "18:53:36",
      status: "Bet Win",
      bet: "+ 2 550 €",
      coef: "25.5",
      icon: { img: coins, name: "coins" },
    },
    {
      id: "2",
      time: "18:53:36",
      status: "Bet Accepted",
      bet: "0 €",
      coef: "3.54",
      icon: { img: coins, name: "coins" },
    },
    {
      id: "3",
      time: "18:53:36",
      status: "Bet Recieved",
      bet: "- 100 €",
      coef: "3.54",
      icon: { img: coins, name: "coins" },
    },
  ],
};

export default store;
