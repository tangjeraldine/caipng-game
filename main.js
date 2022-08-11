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
import gameSound from "./music/chewing-a-pop-corn.mp3";
import countdownBeep from "./music/short-beep-countdown.mp3";

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

const time = {
  seconds: 300,
};

//===========Model/State ==================

const app = {
  dishPrice: {
    rice: Math.random().toFixed(1),
    veg: (0.9 + Math.random()).toFixed(1),
    meat: (2 + Math.random()).toFixed(1),
    fish: (2.8 + Math.random()).toFixed(1),
    veggieMeat: (1 + Math.random()).toFixed(1),
    egg: (0.8 + Math.random()).toFixed(1),
    saltedEgg: 1.3,
    moreCurry: 0.5,
    kimchi: (1.5 + Math.random()).toFixed(1),
    prawn: (2.3 + Math.random()).toFixed(1),
    otah: (1.1 + Math.random()).toFixed(1),
    bambooShoot: (1.2 + Math.random()).toFixed(1),
  },
  num: 0,
  custNum: 0,
  cashGiven: 0,
  changeReturned: 0,
  yourCalculation: 0,
  totalEarned: 0,
  correctCost: 0,
  correctTotal: 0,
  discrepancy: 0,
  promptInput: [],
  outcomes: [
    "No scolding from boss today!",
    "Boss wants you to pay from your own pocket :(",
    "Boss doesn't need you to come in tomorrow anymore!",
  ],
};

//build each customer archetype here using classes

const orders = [];
class Customer {
  constructor(
    type,
    rice,
    veg,
    meat,
    fish,
    veggieMeat,
    egg,
    saltedEgg,
    moreCurry,
    kimchi,
    prawn,
    otah,
    bambooShoot
  ) {
    this.type = type;
    this.rice = rice;
    this.veg = veg;
    this.meat = meat;
    this.fish = fish;
    this.veggieMeat = veggieMeat;
    this.egg = egg;
    this.saltedEgg = saltedEgg;
    this.moreCurry = moreCurry;
    this.kimchi = kimchi;
    this.prawn = prawn;
    this.otah = otah;
    this.bambooShoot = bambooShoot;
  }
  customerIntro() {
    return "Customer Type: " + this.type;
  }
  correctCost() {
    const plate = [
      this.rice,
      this.veg,
      this.meat,
      this.fish,
      this.veggieMeat,
      this.egg,
      this.saltedEgg,
      this.moreCurry,
      this.kimchi,
      this.prawn,
      this.otah,
      this.bambooShoot,
    ];
    const foodPrice = [];
    for (const food in app.dishPrice) {
      foodPrice.push(app.dishPrice[food]);
    }
    const correctPrice = [];
    for (let food = 0; food < plate.length; food++) {
      const subtotal = plate[food] * foodPrice[food];
      if (typeof subtotal === "number") {
        correctPrice.push(subtotal);
      }
    }

    const initialVal = 0;
    const Total = correctPrice.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialVal
    );
    return Total.toFixed(2);
  }
  cashGivenCust() {
    return (
      parseFloat(this.correctCost()) +
      Math.random() * 15 +
      Math.random() * 9 -
      Math.random() * 3
    ).toFixed(1);
  }
  order() {
    const plate = [
      this.rice,
      this.veg,
      this.meat,
      this.fish,
      this.veggieMeat,
      this.egg,
      this.saltedEgg,
      this.moreCurry,
      this.kimchi,
      this.prawn,
      this.otah,
      this.bambooShoot,
    ];
    const words = [
      "Rice: ",
      "Vegetable: ",
      "Meat: ",
      "Fish: ",
      "Veg-Meat: ",
      "Egg: ",
      "Salted Egg: ",
      "Extra Curry: ",
      "Kimchi: ",
      "Prawn: ",
      "Otah: ",
      "Bamboo Shoot: ",
    ];
    for (let i = 0; i < plate.length; i++) {
      if (plate[i] !== 0) {
        orders.push(words[i] + plate[i]);
      }
    }
    return orders;
  }
}

const range2 = Math.round(Math.random() * 2);
const range3 = Math.round(Math.random() * 3);
const range4 = Math.round(Math.random() * 4);
const range5 = Math.round(Math.random() * 5);
const range6 = Math.round(Math.random() * 6);
// const extrachange = Customer.correctCost() + Math.round(Math.random() * 30);
const easy = new Customer(
  "Unmemorable Customer",
  range2,
  range3,
  range4,
  range2,
  range3,
  range2,
  range4,
  0,
  0,
  0,
  0,
  0
);

const medium = new Customer(
  "Picky Customer",
  range5,
  range3,
  range4,
  range2,
  range3,
  range3,
  range4,
  range3,
  range2,
  range5,
  0,
  0
);

const hard = new Customer(
  "The Impossible Customer",
  range6,
  range3,
  range4,
  range6,
  range3,
  range5,
  range4,
  range3,
  range6,
  range5,
  range4,
  range3
);

const difficulty = [easy, medium, hard];

//* 9 customer prompt scenarios
const scene0 = "Customer: The fish is how much again? The veg leh? The meat?";
const scene1 = "Customer: Ehhhhh... here can use Visa Paywave?";
const scene2 =
  "Customer: I just want to try one piece of curry potato... can give me for free?";
const scene3 =
  "Boss is standing behind you. He says, 'The queue is so long! You need to serve faster!' Your reply:";
const scene4 =
  "A New Challenger Approaches! Customer demands to know why their veggie dish is being charged at $1.80 instead of $1.10.";
const scene5 =
  "[Stun like vegetable] Customer wants to know if your long beans were ethically-sourced-100%-all-natural-certified-organic-fair-trade-cruelty-free... Your reply:";
const scene6 =
  "Irate Customer Returns: Auntie just now I order one is fried Chicken or Fish cutlet?";
const scene7 = "Customer: Tsk! So expensive ah!";
const scene8 =
  "Your cooking is on fire! You need to attend to it. Reply attend / ignore: ";
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

//============View=========(static divs not included in render)

const renderClock = () => {
  const minusSec = () => {
    time.seconds--;
    $("#timerdiv").text(time.seconds + " SECONDS LEFT");
  };
  setInterval(minusSec, 1000);
};

const renderPhoto = () => {
  //* generate random photo
  const randURL = photos[Math.floor(Math.random() * 10)];
  const $customerPhoto = $("<img>")
    .attr("src", `${randURL}`)
    .addClass("custPhoto");
  $("#top-2").append($customerPhoto);
};

const renderPricelist = () => {
  for (const food in app.dishPrice) {
    const $foodprice = $("<p>").attr("id", "foodprice");
    $foodprice.text(`${food}, ${app.dishPrice[food]}`);
    $("#pricelist").append($foodprice);
  }
};
renderPricelist();
//
const renderFood = () => {
  const array = difficulty[app.num].order();
  $("#orderlist").empty();
  for (const item of array) {
    const $fooditem = $("<p>").text(`${item}`).addClass("fooditem");
    $("#orderlist").append($fooditem);
  }
  // console.log("array", array);
  // $("#orderlist").text("hello bye hello");
  // console.log("hello bye hello");
};

const renderOrder = () => {
  //*start with clearing top-2 and top-1
  $("#top-2").empty();
  $("#intro").empty();
  $("#orderlist").empty();
  //* append photo
  renderPhoto();
  const randCust = difficulty[app.num];
  //* append customer archetype under photo
  const $randomCustomer = $("<h4>").addClass("random-customer");
  $randomCustomer.text(`${randCust.customerIntro()}`);
  $("#top-2").append($randomCustomer);
  //* append customer order
  renderFood(); //!
  //* every time the button "Return Change" is clicked, custNum+=1 because we have moved on to next customer
  app.custNum += 1;
  $("#customerNumber").text(`${app.custNum}`);
  //* displaying cash given by customer from archetypes
  app.cashGiven = randCust.cashGivenCust();
  $("#cashGiven").text(`${app.cashGiven}` + "0");
  app.correctCost = difficulty[app.num].correctCost();
  console.log("renderOrder", "app.correctCost", app.correctCost);
  console.log("=====================");
};

const countdownBeeps = () => {
  const Beep = new Audio(countdownBeep);
  Beep.play();
};

const auto_refresh = () => {
  $("body").on("click", () => {
    let $emptyField = $("#cashChange");
    $emptyField = "";
  });
};

const renderOrder1 = () => {
  //*start with clearing top-2 and top-1
  $("#top-2").empty();
  $("#orderlist").empty();
  //* append photo
  renderPhoto();
  const randCust = difficulty[app.num];
  //* append customer archetype under photo
  const $randomCustomer = $("<h4>").addClass("random-customer");
  $randomCustomer.text(`${randCust.customerIntro()}`);
  $("#top-2").append($randomCustomer);
  //* append customer order
  renderFood(); //!
  //* every time the button "Return Change" is clicked, custNum+=1 because we have moved on to next customer
  app.custNum += 1;
  $("#customerNumber").text(`${app.custNum}`);
  //* displaying cash given by customer from archetypes
  app.cashGiven = randCust.cashGivenCust();
  $("#cashGiven").text(`${app.cashGiven}`);
  // app.correctCost = `${randCust.correctCost()}`;
  //* put the returnChange button back in place
  $("#returnChangeButton").fadeIn("slow");
  //* force player to click on "Return Change" or else game will end
  if ($("#cashChange").val() === "") {
    alert("The customer left without paying!");
    endGame();
  }
  //* countdown beep to inform player it's going to change soon
  setTimeout(countdownBeeps, 6500);
};

const renderPrompt = () => {
  const random9 = Math.floor(Math.random() * 9);
  app.promptInput.push(prompt(situations[random9]));
  if (
    random9 === 8 &&
    app.promptInput[app.promptInput.length - 1] === "attend"
  ) {
    alert("Crisis averted! You may proceed.");
  } else if (random9 === 8) {
    alert("YOUR KITCHEN IS ON FIRE! TAKE THE CASH AND RUN!!");
    endGame();
  }
};

//============Controller====================

const startgame = () => {
  $(".popup-overlay").hide();
  $(".bottomdiv").hide();
  $("#top-2").hide();
  $("#top-3").hide();
  $("#returnChangeButton").hide();
  //!remove return change buttons and just use value in field
  $("#customerNumber").text("0");
  $("#startgame").on("click", () => {
    $(".bottomdiv").show();
    $("#top-2").show();
    $("#top-3").show();
    $("#startgame").hide();
    $("#customerNumber").text(`${app.custNum}`);
    let diffLv = prompt("0 - EASY \n 1 - MEDIUM \n 2 - HARD");
    diffLv = app.num;
    renderOrder();
  });
};
startgame();

const calculate = () => {
  // calculate the order
  //* retrieve value from input field
  app.changeReturned = $("#cashChange").val();
  app.yourCalculation = app.cashGiven - app.changeReturned;
  app.totalEarned += app.yourCalculation;
  //* display total earned in #top-3 div
  $("#totalEarned").text(`${app.totalEarned.toFixed(2)}`);
  //* calculated the actual total and store in app.correctTotal
  console.log(difficulty[app.num].correctCost());
  app.correctTotal += parseFloat(difficulty[app.num].correctCost());
  app.discrepancy = app.totalEarned - app.correctTotal;
  console.log("calculate func", app.discrepancy);
  renderPrompt();
};

const resultBoard = () => {
  const disc = Math.abs(app.discrepancy);
  if (disc < 3) {
    $("#score-tier").text("EMPLOYEE OF THE MONTH");
    $("#score-comments").text(`${app.outcomes[0]}`);
  } else if (disc < 6 && app.discrepancy >= 3) {
    $("#score-tier").text("COULD BE BETTER");
    $("#score-comments").text(`${app.outcomes[1]}`);
  } else {
    $("#score-tier").text("SEE YOU NEVER");
    $("#score-comments").text(`${app.outcomes[2]}`);
  }
};

const inputCompilation = () => {
  for (let i = 0; i < app.promptInput.length; i++) {
    const $input = $("<h3>")
      .text(`${app.promptInput[i]}`)
      .attr("id", "promptInput");
    $(".popup-content3").append($input);
  }
};

const endGame = () => {
  alert("Lunch is over!");
  //* create window pop up
  $("#page").fadeOut("slow");
  $(".popup-overlay").fadeIn("slow");
  //* create text to indicate comments based on score
  resultBoard();
  //* display the totalEarned, correctTotal, discrepancy values
  app.totalEarned = app.totalEarned.toFixed(2);
  $("#earned").text(`${app.totalEarned}`);
  app.correctTotal = parseFloat(app.correctTotal).toFixed(2);
  $("#correctTotal").text(`${app.correctTotal}`);
  app.discrepancy = app.discrepancy.toFixed(2);
  console.log(app.discrepancy); //!
  $("#total-discrepancy").text(`${app.discrepancy}`);
  //* add comments that were input during the game to review for fun
  inputCompilation();
  //* add exit or reset buttons
  $("#close").on("click", () => {
    window.close();
  });
  $("#reset").on("click", () => {
    location.reload();
  });
};

const soundEffect = () => {
  const gameSounds = new Audio(gameSound);
  gameSounds.play();
};

const main = () => {
  // start with state of custNum= 1
  $("#startTimerButton").on("click", (event) => {
    event.preventDefault();
    //* countdown beep to inform player it's going to change soon
    renderClock();
    setTimeout(countdownBeeps, 6500);
    $("#startTimerButton").fadeOut("slow");
    $("#returnChangeButton").fadeIn("slow");
    setInterval(renderOrder1, 6_000); //!30000
    $("#returnChangeButton").on("click", () => {
      $("#returnChangeButton").fadeOut("slow");
      soundEffect();
      calculate();
    });
    setTimeout(endGame, 15_000); //!300000
  });
};
main();
