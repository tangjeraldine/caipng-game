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
import hawker1 from "./images/hawker1.jpg";
import hawker2 from "./images/hawker2.jpg";
import hawker3 from "./images/hawker3.jpg";
import hawker4 from "./images/hawker4.jpg";
import hawker5 from "./images/hawker5.jpg";
import hawker6 from "./images/hawker6.jpg";
import hawker7 from "./images/hawker7.png";
import hawker8 from "./images/hawker8.jpg";
import hawker9 from "./images/hawker9.jpg";
import hawker10 from "./images/hawker10.jpg";
import gameSound from "./music/chewing-a-pop-corn.mp3";
import countdownBeep from "./music/short-beep-countdown.mp3";

//===========Model/State ==================

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

const hawkers = [
  hawker1,
  hawker2,
  hawker3,
  hawker4,
  hawker5,
  hawker6,
  hawker7,
  hawker8,
  hawker9,
  hawker10,
];

const time = {
  seconds: 300,
};

const soundEffect = () => {
  const gameSounds = new Audio(gameSound);
  gameSounds.play();
};

const countdownBeeps = () => {
  const Beep = new Audio(countdownBeep);
  Beep.play();
};

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
  totalDiscrepancy: 0,
  promptInput: [],
  outcomes: [
    "No scolding from boss today!",
    "Boss wants you to pay from your own pocket :(",
    "Boss doesn't need you to come in tomorrow anymore!",
  ],
};

//build each customer archetype here using classes

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
    const orders = [];
    orders.length = 0;
    for (let i = 0; i < plate.length; i++) {
      if (plate[i] !== 0) {
        orders.push(words[i] + plate[i]);
      }
    }
    return orders;
  }
}

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

const trivia1 =
  "Singapore in the 1800s: With just three cents, anyone could afford a sumptuous meal of three to four dishes, served up at a moment’s notice. On the same street, one could easily savour the flavours from different parts of Asia, catered to local tastes. This vibrant beginning marked the first chapters of Singapore's hawker story.";
const trivia2 =
  "In the post-WW2 era, hawkers in Singapore usually did not have easy access to water. This made it difficult to keep their utensils clean and prevent contamination by flies and rats. Without a properly assigned disposal area, hawkers often left piles of refuse on the streets, posing a threat to public health and hygiene. ";
const trivia3 =
  "A story from the 1960s has it that an Englishman had asked a Malay hawker in Sembawang for a hamburger. Since hamburgers weren't available at that time, the hawker put minced mutton, onions and an omelette between sliced halves of a french loaf. The anonymous hawker then told the customer, 'Silakan makan roti John'.";
const trivia4 =
  "From 1971 to 1986, the government sought to relocate up to 18,000 hawkers to markets and hawker centres with proper amenities. Chomp Chomp Food Centre, Block 51 Old Airport Road, and Tiong Bahru Market were among the first hawker centres in Singapore.";
const trivia5 =
  "Today, more than 110 hawker centres are located across Singapore.";
const trivia6 =
  "More than half of today's hawkers are second and third generation hawkers, most of them specialising in a particular dish, refining the recipes that have been passed down to them. ";
const trivia7 =
  "Opened in 2012, Kampung @ Simpang Bedok was set up to help budding hawkers who had the option of being paid a salary until they could afford the rent. The concept lasted only a year, due to stiff competition and poor business.";
const trivia8 =
  "Did you know that in the 1950s, earthworms were added to laksa for saltiness, as well as maggots to 'eat away bacteria'? Thankfully, the dish we know and love today has none of the creepy crawlies and is made with much more appetising ingredients such as prawns, cockles, fish cake, taupok, beansprouts and hard-boiled egg. ";
const trivia9 =
  "The satay we know and love come from kebabs, a staple in Middle Eastern cuisine. In the 60s and 70s, satay was served by unlicensed hawkers at bus terminals, such as in Beach Road, at makeshift portable stalls. Customers would often dip their satay skewers in a communal pot of sauce.";
const trivia10 =
  "In 2002, a Guinness World Record was set for the world's longest popiah, measuring at 108m! The impressive popiah was made by over 500 grassroots leaders and residents at the Thomson Community Club.";
const trivia = [
  trivia1,
  trivia2,
  trivia3,
  trivia4,
  trivia5,
  trivia6,
  trivia7,
  trivia8,
  trivia9,
  trivia10,
];

//============View=====================

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

const renderHawker = () => {
  const randomHwkrImg = hawkers[Math.floor(Math.random() * 10)];
  const randomTrivia = trivia[Math.floor(Math.random() * 10)];
  $("#hawkerimage").attr("src", `${randomHwkrImg}`);
  $("#hawkertrivia").text(`${randomTrivia}`);
};

const renderPricelist = () => {
  for (const food in app.dishPrice) {
    const $foodprice = $("<p>").attr("id", "foodprice");
    $foodprice.text(`${food}, ${app.dishPrice[food]}`);
    $("#pricelist").append($foodprice);
  }
};
renderPricelist();

const renderOrder = () => {
  //*start with clearing top-2
  $("#top-2").empty();
  //* append customer order
  const easy = new Customer(
    "Normal Customer",
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 4),
    0,
    0,
    0,
    0,
    0
  );

  const medium = new Customer(
    "Kena Saikang",
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 5),
    0,
    0
  );

  const hard = new Customer(
    "Buying for A Whole Village",
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 6)
  );
  const difficulty = [easy, medium, hard];
  const array = difficulty[app.num].order();
  for (const item of array) {
    const $fooditem = $("<li>")
      .text(`${item}`)
      .addClass("fooditem")
      .css("font-size", "20px");
    $("#orderlist").append($fooditem);
  }
  //* append photo
  renderPhoto();
  renderHawker();
  //* append customer archetype under photo
  const $randomCustomer = $("<h4>").addClass("random-customer");
  $randomCustomer.text(`${difficulty[app.num].customerIntro()}`);
  $("#top-2").append($randomCustomer);
  //* every time the button "Return Change" is clicked, custNum+=1 because we have moved on to next customer
  app.custNum += 1;
  $("#customerNumber").text(`${app.custNum}`);
  //* displaying cash given by customer from types
  app.cashGiven = difficulty[app.num].cashGivenCust();
  $("#cashGiven").text(`${app.cashGiven}` + "0");
  app.correctCost = difficulty[app.num].correctCost();
  console.log("app.correctCost", app.correctCost);
  $("#tutorial").on("click", () => {
    $("#tutorial").fadeOut("slow");
    calculate();
  });
};

const renderOrder1 = () => {
  //*start with clearing top-2 and top-1
  $("#top-2").empty();
  $("#orderlist").empty();
  $("#tutorial").hide();
  const easy = new Customer(
    "I'm A Very Normal Customer",
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 4),
    0,
    0,
    0,
    0,
    0
  );

  const medium = new Customer(
    "Kena Saikang",
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 2),
    Math.round(Math.random() * 5),
    0,
    0
  );

  const hard = new Customer(
    "Buying for A Whole Village",
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 3),
    Math.round(Math.random() * 6),
    Math.round(Math.random() * 5),
    Math.round(Math.random() * 4),
    Math.round(Math.random() * 6)
  );
  const difficulty = [easy, medium, hard];

  //* append photo
  renderPhoto();
  renderHawker();
  //* append customer type under photo
  const $randomCustomer = $("<h4>").addClass("random-customer");
  $randomCustomer.text(`${difficulty[app.num].customerIntro()}`);
  $("#top-2").append($randomCustomer);

  app.custNum += 1;
  $("#customerNumber").text(`${app.custNum}`);
  //*append order that refreshes every run
  const array = difficulty[app.num].order();
  for (const item of array) {
    const $fooditem = $("<li>")
      .text(`${item}`)
      .addClass("fooditem")
      .css("font-size", "20px");
    $("#orderlist").append($fooditem);
  }
  //* displaying cash given by customer from types
  app.cashGiven = difficulty[app.num].cashGivenCust();
  $("#cashGiven").text(`${app.cashGiven}`);
  app.correctCost = difficulty[app.num].correctCost();
  calculate();
  if ($("#cashChange").val() === "") {
    alert("The customer escaped without paying!");
    endGame();
  }
  //* countdown beep to inform player it's going to change soon
  setTimeout(countdownBeeps, 26000);
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
  $("#customerNumber").text("0");
  $("#startgame").on("click", () => {
    $(".bottomdiv").show();
    $("#top-2").show();
    $("#top-3").show();
    $("#startgame").hide();
    $("#intro").empty();
    $("#tutorial").hide();
    $("#customerNumber").text(`${app.custNum}`);
    let diffLv = prompt("0 - EASY \n 1 - MEDIUM \n 2 - HARD");
    diffLv = parseInt(diffLv);
    if (diffLv === 0) {
      app.num = 0;
    } else if (diffLv === 1) {
      app.num = 1;
    } else if (diffLv === 2) {
      app.num = 2;
    } else {
      alert("Aiyoh. Choose properly leh. Later get scolded by Boss ah.");
      location.reload();
    }
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
  $("#totalEarned").text(`${app.totalEarned}`);
  //* calculated the actual total and store in app.correctTotal
  app.correctTotal += parseFloat(app.correctCost);
  renderPrompt();
};

const resultBoard = () => {
  const disc = Math.abs(app.totalDiscrepancy);
  if (disc < 3) {
    $("#score-tier").text("EMPLOYEE OF THE MONTH");
    $("#score-comments").text(`${app.outcomes[0]}`);
  } else if (disc < 6 && disc >= 3) {
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
  soundEffect();
  alert("Lunch is over!");
  //* create window pop up
  $("#page").fadeOut("slow");
  $(".popup-overlay").fadeIn("slow");
  //* display the totalEarned, correctTotal, discrepancy values
  app.totalEarned = parseFloat(app.totalEarned).toFixed(2);
  $("#earned").text(`${app.totalEarned}`);
  app.correctTotal = parseFloat(app.correctTotal).toFixed(2);
  $("#correctTotal").text(`${app.correctTotal}`);
  app.totalDiscrepancy = app.totalEarned - app.correctTotal;
  app.totalDiscrepancy = parseFloat(app.totalDiscrepancy).toFixed(2);
  $("#total-discrepancy").text(`${app.totalDiscrepancy}`);
  //* create text to indicate comments based on score
  resultBoard();
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

const main = () => {
  $("#startTimerButton").on("click", (event) => {
    event.preventDefault();
    $("#tutorial").fadeIn("slow");
    $("#startTimerButton").fadeOut("slow");
    setTimeout(countdownBeeps, 26_500);
    renderClock();
    renderOrder();
    setInterval(renderOrder1, 30_000); //!30sec
    setTimeout(endGame, 300_000); //!5min
  });
};
main();
