(this.webpackJsonpbereza=this.webpackJsonpbereza||[]).push([[0],[,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(0),s=i(1),o=i.n(s),n=i(4),a=i.n(n),r=(i(10),i(2));i(11),i(12);var d=function(e){var t=e.handleClick,i=e.active,s=e.text,o=e.id;return Object(c.jsx)("button",{className:i===o?"Button":"",onClick:t,id:o,children:s})},l=(i(13),["42","43","44"]);var m=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=t[0],o=t[1];function n(e){var t=e.target;o(t.id)}var a=l.map((function(e,t){return Object(c.jsxs)("button",{onClick:n,active:i,text:e,id:e,className:i===e?"Btns__button":"",children:[e," "]},t)}));return Object(c.jsx)("div",{className:"Btns",children:a})},_=(i(14),i.p+"static/media/check.6e78231e.svg"),j=i.p+"static/media/clock.6170a73b.svg",p=i.p+"static/media/coins.f7743479.svg",b=i.p+"static/media/coins_white.d83bffdd.svg",x=i.p+"static/media/back.1ffc53de.svg",f=i.p+"static/media/brick.2bfe616a.svg",B={data:[{id:"00000",isWon:!1,options:{first:{text:" Offside ",color:"#D6B2FF"},second:{text:" Free Kick ",color:"#A6DDFF"},third:{text:" Goal Kick ",color:"#85F2EF"}},icon:{img:_,name:"check"},time:"18:53:36",bet:"1000 \u20ac",payment:"2799.32  \u20ac",coef:"2.7"},{id:"00001",isWon:!1,options:{first:{text:"Goal",color:"#FFC6A6"},second:{text:" Goal Kick ",color:"#85F2EF"},third:""},icon:{img:j,name:"clock"},time:"18:53:36",bet:"1000.00 \u20ac",payment:"2700.32  \u20ac",coef:"2.7"},{id:"086",isWon:!0,options:{first:{text:"Goal",color:"#FFC6A6"},second:"",third:""},icon:{img:p,name:"coinsWin"},time:"18:53:36",bet:"100  \u20ac",payment:"2500  \u20ac",coef:"25.5"},{id:"087",isWon:!1,options:{first:{text:" Offside ",color:"#D6B2FF"},second:"",third:""},icon:{img:x,name:"back"},time:"18:53:36",bet:"1000.00 \u20ac",payment:"2700.32  \u20ac",coef:"2.7"},{id:"088",isWon:!1,options:{first:{text:" Free Kick ",color:"#A6DDFF"},second:{text:" Corner Kick",color:"#FEB2D5"},third:""},icon:{img:f,name:"brick"},time:"18:53:36",bet:"1000.00 \u20ac",payment:"2700.32  \u20ac",coef:"2.7"},{id:"089",isWon:!1,options:{first:{text:" Free Kick ",color:"#A6DDFF"},second:{text:" Corner Kick",color:"#FEB2D5"},third:""},icon:{img:f,name:"brick"},time:"18:53:36",bet:"1000.00 \u20ac",payment:"2700.32  \u20ac",coef:"2.7"},{id:"090",isWon:!1,options:{first:{text:" Free Kick ",color:"#A6DDFF"},second:{text:" Corner Kick",color:"#FEB2D5"},third:""},icon:{img:f,name:"brick"},time:"18:53:36",bet:"1000.00 \u20ac",payment:"2700.32  \u20ac",coef:"2.7"},{id:"091",isWon:!1,options:{first:{text:" Free Kick ",color:"#A6DDFF"},second:{text:" Corner Kick",color:"#FEB2D5"},third:""},icon:{img:f,name:"brick"},time:"18:53:36",bet:"1000.00 \u20ac",payment:"2700.32  \u20ac",coef:"2.7"}],spoilerData:[{id:"1",time:"18:53:36",status:"Bet Win",bet:"+ 2 550 \u20ac",coef:"25.5",icon:{img:b,name:"coins"}},{id:"2",time:"18:53:36",status:"Bet Accepted",bet:"0 \u20ac",coef:"3.54",icon:{img:b,name:"coins"}},{id:"3",time:"18:53:36",status:"Bet Recieved",bet:"- 100 \u20ac",coef:"3.54",icon:{img:b,name:"coins"}}]};i(15),i(16);var h=function(e){var t=e.data;return Object(c.jsx)("div",{className:"BetSpoiler",children:Object(c.jsxs)("div",{className:"BetSpoiler__info",children:[Object(c.jsxs)("div",{className:"BetSpoiler__wrap",children:[Object(c.jsx)("p",{className:"BetSpoiler__time",children:t.time}),Object(c.jsxs)("div",{className:"BetSpoiler__bet",children:[Object(c.jsx)("p",{className:"BetSpoiler__status",children:t.status}),Object(c.jsx)("p",{className:"BetSpoiler__summ",children:t.bet})]})]}),Object(c.jsxs)("div",{className:"BetSpoiler__coef-wrap",children:[Object(c.jsx)("p",{className:"BetSpoiler__coef",children:t.coef}),Object(c.jsx)("img",{className:"BetSpoiler__icon",src:t.icon.img,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"})]})]})})};var u=function(e){var t=e.data,i=e.spoilerData,o=Object(s.useState)(""),n=Object(r.a)(o,2),a=n[0],d=n[1],l=Object(s.useState)(!1),m=Object(r.a)(l,2),_=m[0],j=m[1],p=i.map((function(e){return a===t.id?Object(c.jsx)(h,{data:e},e.id):""}));return console.log(t.icon.name),Object(c.jsxs)("li",{className:"Bet",onClick:function(){return e=t.id,void(!1===_&&t.isWon?(j(!0),d(e)):(j(!1),d("")));var e},children:[Object(c.jsxs)("div",{className:t.isWon?"Bet__content Bet__content_won":"Bet__content",children:[Object(c.jsxs)("div",{className:"Bet__conditions-wrap",children:[Object(c.jsxs)("div",{className:"Bet__info",children:[Object(c.jsxs)("p",{className:t.isWon?"Bet__id Bet__id_won":"Bet__id",children:["ID ",t.id]}),Object(c.jsx)("p",{className:t.isWon?"Bet__time Bet__time_won":"Bet__time",children:t.time})]}),Object(c.jsxs)("div",{className:t.isWon?"Bet__conditions Bet__conditions_won":"Bet__conditions",children:[Object(c.jsxs)("div",{className:"Bet__options",children:[Object(c.jsx)("p",{className:"Bet__option",style:{color:"".concat(t.options.first.color)},children:t.options.first.text}),t.options.second.text?Object(c.jsx)("span",{className:"brick"===t.icon.name?"Bet__option-divider Bet__option-divider_type_normal":"Bet__option-divider",children:"or"}):"",Object(c.jsx)("p",{className:"Bet__option",style:{color:"".concat(t.options.second.color)},children:t.options.second.text}),t.options.third.text?Object(c.jsx)("span",{className:"brick"===t.icon.name?"Bet__option-divider Bet__option-divider_type_normal":"Bet__option-divider",children:"or"}):"",Object(c.jsx)("p",{className:"Bet__option",style:{color:"".concat(t.options.third.color)},children:t.options.third.text})]}),Object(c.jsxs)("div",{className:"Bet__summs",children:[Object(c.jsxs)("p",{className:"Bet__summ",children:["Bet: ",t.bet]}),Object(c.jsxs)("p",{className:"Bet__payment",children:["Paid: ",t.payment]})]})]})]}),Object(c.jsxs)("div",{className:t.isWon?"Bet__coef-wrap  Bet__coef-wrap_won":"Bet__coef-wrap",children:[Object(c.jsx)("img",{className:"Bet__icon.img",src:t.icon.img,alt:"\u0438\u043a\u043e\u043d\u043a\u0430"}),Object(c.jsx)("p",{className:"Bet__coef",children:t.coef})]})]}),p]})};var O=function(){var e=B.data.map((function(e){return Object(c.jsx)(u,{data:e,spoilerData:B.spoilerData,isWon:e.isWon},e.id)}));return Object(c.jsxs)("div",{className:"BetLog",children:[Object(c.jsx)("h2",{className:"BetLog__title",children:"Bets"}),Object(c.jsxs)("div",{className:"BetLog__content",children:[Object(c.jsxs)("ul",{className:"BetLog__list",children:[" ",e]}),Object(c.jsx)("div",{className:"BetLog__scroll"})]})]})},v=["42","43","44"];var N=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=t[0],o=t[1];function n(e){var t=e.target;o(t.id)}var a=v.map((function(e,t){return Object(c.jsx)(d,{handleClick:n,active:i,text:e,id:e},t)}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{children:a}),Object(c.jsx)(m,{}),Object(c.jsx)(O,{})]})},g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;i(e),c(e),s(e),o(e),n(e)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.f6b0dc90.chunk.js.map