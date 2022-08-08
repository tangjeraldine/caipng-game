import $ from "jquery";
import angry from "./images/angry.png";
import angsty from "./images/angsty.png";
import cat from "./images/cat.png";
import grumpy from "./images/grumpy.png";
import hangry from "./images/hangry.png";
import meinv from "./images/meinv.png";
import shuaige from "./images/shuaige.png";
import smiley from "./images/smiley.png";
import unsure from "./images/unsure.png";
import youngster from "./images/youngster.png";

//===========Model/State ==================

//build each customer archetype here using classes

class Customer {
  constructor(
    archetype,
    rice,
    veg,
    meat,
    fish,
    veggieMeat,
    egg,
    saltedEgg,
    moreCurry,
    correctPrice,
    cashGiven
  ) {
    this.archetype = archetype;
    this.rice = rice;
    this.veg = veg;
    this.meat = meat;
    this.fish = fish;
    this.veggieMeat = veggieMeat;
    this.egg = egg;
    this.saltedEgg = saltedEgg;
    this.moreCurry = moreCurry;
    this.correctPrice = correctPrice;
    this.cashGiven = cashGiven;
  }
  customerIntro() {
    return "Customer Type: " + this.archetype;
  }
  cashGivenCust() {
    return this.cashGiven;
  }
  correctCost() {
    return this.correctPrice;
  }
  order() {
    return (
      "Rice: " +
      this.rice +
      "\n Vegetables: " +
      this.veg +
      "\n Meat: " +
      this.meat +
      "\n Fish: " +
      this.fish +
      "\n Veg With Meat: " +
      this.veggieMeat +
      "\n Eggs: " +
      this.egg +
      "\n Salted Eggs: " +
      this.saltedEgg +
      "\n Extra Curry: " +
      this.moreCurry
    );
  }
}

//* 16 customer archetypes to code out
const cust0 = new Customer(
  "Unmemorable Customer X",
  1,
  2,
  1,
  0,
  0,
  0,
  0,
  0,
  4.8,
  10
);
// console.log(cust0.archetype);

const cust1 = new Customer("I'm Taking Orders", 4, 4, 4, 0, 0, 1, 0, 1, 17, 50);

const cust2 = new Customer(
  "My Colleagues Are Too Busy To Come Out",
  3,
  2,
  3,
  1,
  1,
  0,
  1,
  2,
  17.6,
  20.6
);

const cust3 = new Customer(
  "Unmemorable Customer Y",
  2,
  2,
  3,
  0,
  1,
  0,
  0,
  2,
  12.4,
  50
);

const cust4 = new Customer(
  "Unmemorable Customer Z",
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  0,
  5,
  5
);

const cust5 = new Customer(
  "Let Me Pay for Everyone!",
  6,
  3,
  7,
  2,
  2,
  2,
  0,
  4,
  37.1,
  100
);

const cust6 = new Customer(
  "Rice is Too Much Carbs",
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  10.3,
  11
);

const cust7 = new Customer(
  "I Want To Try Everything",
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  12.5,
  15
);

const cust8 = new Customer(
  "Hungrier Than A Hippo",
  2,
  2,
  1,
  1,
  0,
  2,
  0,
  2,
  13.1,
  17.4
);

const cust9 = new Customer(
  "Unmemorable Customer Z",
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  5.7,
  7.2
);

const cust10 = new Customer(
  "Wo Yao Zhe Ge Na Ge",
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  0,
  5,
  50.2
);

const cust11 = new Customer(
  "Almost Vegetarian",
  1,
  3,
  0,
  0,
  0,
  0,
  0,
  0,
  5,
  8.3
);

const cust12 = new Customer("That Was Weird", 1, 1, 0, 0, 0, 0, 2, 3, 5.6, 7.9);

const cust13 = new Customer(
  "Unmemorable Customer B",
  2,
  1,
  0,
  2,
  1,
  0,
  0,
  1,
  11.2,
  19.6
);

const cust14 = new Customer(
  "All About Proteins",
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  0,
  7.9,
  11.4
);

const cust15 = new Customer(
  "Unmemorable Customer C",
  3,
  3,
  3,
  0,
  3,
  1,
  1,
  3,
  21,
  30
);

const archetypes = [
  cust0,
  cust1,
  cust2,
  cust3,
  cust4,
  cust5,
  cust6,
  cust7,
  cust8,
  cust9,
  cust10,
  cust11,
  cust12,
  cust13,
  cust14,
  cust15,
];

//* 10 customer images to source

const photos = [
  angry,
  angsty,
  cat,
  grumpy,
  hangry,
  meinv,
  shuaige,
  smiley,
  unsure,
  youngster,
];

//* 6 customer prompt scenarios
const scene0 = "Customer: The fish is how much again? The veg leh? The meat?";
const scene1 = "Customer: Ehhhhh... here can use Visa Paywave?";
const scene2 =
  "Customer: I just want to try one piece of curry potato... can give me for free?";
const scene3 =
  "Boss is standing behind you! 'The queue is so long! You need to serve faster!'";
const scene4 =
  "A New Challenger Approaches! Customer demands to know why their veggie dish is being charged at $1.80 instead of $1.10.";
const scene5 =
  "[Stun like vegetable] Customer wants to know if your long beans were ethically-sourced-100%-all-natural-certified-organic-fair-trade-cruelty-free... Your reply:";
const scene6 =
  "Irate Customer Returns: Auntie just now I order one is fried Chicken or Fish cutlet?";
const scene7 = "Customer: Tsk! So expensive ah!";
const scene8 = "Your cooking is on fire! Reply 'Attend' or 'Ignore'.";
const situations = [
  scene0,
  scene1,
  scene2,
  scene3,
  scene4,
  scene5,
  scene6,
  scene7,
  scene8,
];

const app = {
  dishPrice: {
    riceP: 0.4,
    vegP: 1.1,
    meatP: 2.2,
    fishP: 3.5,
    veggieMeatP: 1.8,
    eggP: 1.7,
    saltedEggP: 1.3,
    moreCurryP: 0.5,
  },
  custNum: 0,
  cashGiven: 0,
  changeReturned: 0,
  yourCalculation: 0,
  totalEarned: 0,
  correctCost: 0,
  correctTotal: 0,
  discrepancy: 0,
  outcomes: [
    "No scolding from boss today!",
    "Boss wants you to pay from your own pocket :(",
    "Boss doesn't need you to come in tomorrow anymore",
  ],
};

//============View=========(static divs not included in render)

const renderPhoto = () => {
  //* generate random photo
  const randURL = photos[Math.floor(Math.random() * 10)];
  const $customerPhoto = $("<img>")
    .attr("src", `${randURL}`)
    .addClass("custPhoto");
  $("#top-2").append($customerPhoto);
};

const renderOrder = () => {
  //*start with clearing top-2 and top-1
  $("#top-2").empty();
  $("#top-1").empty();
  //* append photo
  renderPhoto();
  //* randomly select customer from array
  const randCust = archetypes[Math.floor(Math.random() * 16)];
  //* append customer archetype under photo
  const $randomCustomer = $("<h4>").addClass("random-customer");
  $randomCustomer.text(`${randCust.customerIntro()}`);
  $("#top-2").append($randomCustomer);
  //* append customer order
  const $randomOrder = $("<div>").addClass("random-order");
  $randomOrder.text(`${randCust.order()}`);
  $("#top-1").append($randomOrder);
  //* every time the button "Return Change" is clicked, custNum+=1 because we have moved on to next customer
  app.custNum += 1;
  $("#customerNumber").text(`${app.custNum}`);
  //* displaying cash given by customer from archetypes
  app.cashGiven = `${randCust.cashGivenCust()}`;
  app.cashGiven = parseFloat(app.cashGiven).toFixed(2);
  $("#cashGiven").text(`${app.cashGiven}`);
  app.correctCost = `${randCust.correctCost()}`;
};

const renderPrompt = () => {
  if (app.custNum === 1) {
    alert(
      "Remember to return your customers the correct change! Only the first round has no timing."
    );
  } else if (app.custNum > 1 && app.custNum % 3 === 0) {
    const random9 = Math.floor(Math.random() * 9);
    prompt(`${situations[random9]}`);
    if (random9 === situations[8]) {
      if (prompt(`${situations[8]}`).toLowerCase() === "attend") {
        alert("Crisis averted! You may proceed.");
      } else {
        alert(
          "The fire has spread. Your stall is now non-operational and you need to stop selling."
        );
        endGame();
      }
    }
  }
};
renderPrompt();

const renderTimerButton = () => {
  $("#timerdiv").hide();
  $("#checkButton").on("click", () => {
    $("#timerdiv").fadeToggle();
  });
};
renderTimerButton();

//============Controller====================

const startgame = () => {
  $(".popup-overlay").hide();
  $(".bottomdiv").hide();
  $("#top-2").hide();
  $("#top-3").hide();
  $("#customerNumber").text("0");
  $("#startgame").on("click", () => {
    $(".bottomdiv").show();
    $("#top-2").show();
    $("#top-3").show();
    $("#startgame").hide();
    $("#customerNumber").text(`${app.custNum}`);
    renderOrder();
  });
};
startgame();

const wholeGame = () => {
  renderOrder();
  calculate();
};

const main = () => {
  // start with state of custNum= 1
  $("#changeButton").on("click", (event) => {
    event.preventDefault();
    if (`${app.totalEarned.toFixed(2)}` < 100) {
      setInterval(wholeGame, 5000);
    } else if (`${app.totalEarned.toFixed(2)}` >= 100) {
      clearInterval();
      endGame();
    }
  });
  //! ALERT intro & instructions if custNum===1
  //generate random output of custOrder() in #top-1
  //! input field must contain 1 word related to eating with at least 7 characters
  //? is it possible to save the input and put in an array, then display in endGame()?
};
main();

const calculate = () => {
  // calculate the order
  //* retrieve value from input field
  app.changeReturned = $("#cashChange").val();
  app.yourCalculation = app.cashGiven - app.changeReturned;
  app.totalEarned += app.yourCalculation;
  //* display total earned in #top-3 div
  $("#totalEarned").text(`${app.totalEarned.toFixed(2)}`);
  //* calculated the actual total and store in app.correctTotal
  app.correctTotal += parseFloat(app.correctCost);
  app.discrepancy = app.totalEarned - app.correctTotal;
  //* if totalEarned >= $150, invoke endGame()
};

const endGame = () => {
  alert("the end");
  $("#page").fadeOut("slow");
  $(".popup-overlay").fadeIn("slow");
  app.discrepancy = app.discrepancy.toFixed(2);
  // total discrepancy will be shown in score page
  $("#total-discrepancy").text(`${app.discrepancy}`);
  $("#close").on("click", () => {
    window.close();
  });
  $("#reset").on("click", () => {
    location.reload();
  });
  //! create window pop up
  // display the no. of customers served, totalEarned, correctTotal, discrepancy values
  // create text to indicate comments based on score, like so:
  //* if discrepancy (<$1, return "No scolding from boss today!")
  //* ($1<= X < $5 return "Boss wants you to pay from your own pocket :(")
  //* ($5<= X return "Boss doesn't need you to come in tomorrow anymore")
  //! close window pop up
};
// endGame();
