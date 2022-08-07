import $ from "jquery";

//===========Model/State ==================

//build each customer archetype here using classes

class customer {
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
const cust0 = new customer(
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

const cust1 = new customer("I'm Taking Orders", 4, 4, 4, 0, 0, 1, 0, 1, 17, 50);

const cust2 = new customer(
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

const cust3 = new customer(
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

const cust4 = new customer(
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

const cust5 = new customer(
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

const cust6 = new customer(
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

const cust7 = new customer(
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

const cust8 = new customer(
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

const cust9 = new customer(
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

const cust10 = new customer(
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

const cust11 = new customer(
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

const cust12 = new customer("That Was Weird", 1, 1, 0, 0, 0, 0, 2, 3, 5.6, 7.9);

const cust13 = new customer(
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

const cust14 = new customer(
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

const cust15 = new customer(
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
const image0 = "../images/grumpy.png";
const image1 = "../images/angry.png";
const image2 = "../images/cat.png";
const image3 = "../images/hangry.png";
const image4 = "../images/meinv.png";
const image5 = "../images/shuaige.png";
const image6 = "../images/smiley.png";
const image7 = "../images/unsure.png";
const image8 = "../images/youngster.png";
const image9 = "../images/angsty.png";
const photos = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

//* customer prompt scenarios
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
const situations = [scene0, scene1, scene2, scene3, scene4, scene5];

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
  custNum: 1,
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

const rendertop1 = () => {
  const $randomOrder = $("<div>").addClass("random-order");
  $randomOrder.text(`${randCust.order()}`);
  $("#top-1").append($randomOrder);
};

const rendertop2 = () => {
  //* rendering div of class top-2
  $("#top-2").empty(); //*start with clearing top-2
  //* append photo
  const randURL = photos[Math.floor(Math.random() * 10)];
  const $customerPhoto = $("<img>")
    .attr("src", `${randURL}`)
    .addClass("custPhoto");
  $("#top-2").append($customerPhoto);
  //* append customer archetype
  const $randomCustomer = $("<h4>").addClass("random-customer");
  $randomCustomer.text(`${randCust.customerIntro()}`);
  $("#top-2").append($randomCustomer);
  rendertop1();
};

const rendertop3 = () => {
  app.custNum += 1;
  $("#customerNumber").text(`${app.custNum}`);
  app.changeReturned = $("#cashChange").val();
  $("#cashGiven").text(`${randCust.cashGivenCust()}`);
  app.cashGiven = `${randCust.cashGivenCust()}`;
  app.yourCalculation = app.cashGiven - app.changeReturned;
  app.totalEarned += app.yourCalculation;
};

const renderbot2 = () => {};

const renderPrompt = () => {
  if (custNum === 1) {
    alert(
      "It's lunch hour! Tabulate the orders of each customer and return them the correct change!"
    );
  } else if (custNum % 2 === 0 || custNum % 5 === 0) {
    const random10 = Math.floor(Math.random() * 10);
    prompt(situations[random10]);
  } else if (custNum % 7 === 0) {
    let fire = prompt("Your cooking is on fire! Reply 'Attend' or 'Ignore'.");
    if (fire === "Attend") {
      alert("Crisis Averted!");
    } else {
      alert("Oh no! Your stall is now on fire.");
      //* game will end if stall is on fire. Load endGame and display separate result if total <$150
      endGame();
    }
  } else if (custNum % 11 === 0) {
    let cutlet = prompt(
      "Irate Customer Returns: Auntie just now I order one is fried Chicken or Fish cutlet?"
    );
    if (cutlet.length >= 4) {
      alert("Customer: Tsk! So expensive ah!");
    } else if (cutlet.length < 4) {
      alert(
        "Customer: This cai png so expensive and auntie so rude! Next time I don't eat here already!"
      );
    }
  }
};

//============Controller====================
const randCust = archetypes[Math.floor(Math.random() * 16)];

const startgame = () => {
  $(".bottomdiv").hide();
  $("#top-2").hide();
  $("#top-3").hide();
  $("#customerNumber").text("0");
  $("#startgame").on("click", (event) => {
    $(".bottomdiv").show();
    $("#top-2").show();
    $("#top-3").show();
    $("#startgame").hide();
    $("#customerNumber").text(`${app.custNum}`);
    rendertop2();
  });
};
startgame();

const generateCust = () => {
  // start with state of custNum= 1
  $("#changeButton").on("click", (event) => {
    event.preventDefault();
    rendertop2();
    rendertop3();
  });
  //every time the button "Return Change" is clicked, custNum+=1 because we have moved on to next customer
  //! ALERT intro & instructions if custNum===1
  //prompts if custNum is prime
  //generate random output of custOrder() in #top-1
  //generate random output img of cust in #top-2 using generateCustPhoto()
  //! PROMPT injection scenario (randomly generated) if custNum can be divided by 3 or 5
  //! input field must contain 1 word related to eating with at least 7 characters
  //? is it possible to save the input and put in an array, then display in endGame()?
};

generateCust();

const main = () => {
  //upon clicking "Return Change" button, invoke addToTotal(), which is:
  // cash given will be given based on custType
  // (teen girl always gives $4, normal guy always gives $10, group always gives $50, etc)
  // cash - change = yourCalculation
  // totalEarned += yourCalculation
  //------------
  //correctCost() will include function to calculate actual cost (correctCost) of order
  // correctCost = () => {<tabulate order> --> //? how do you do this?
  // return correctTotal}
  //------------
  // discrepancy = correctTotal - totalEarned
  // caiPngPro button can be used to toggle to see discrepancy div in top-3 div
  //------------
  //* if totalEarned >= $150, invoke endGame()
};
// main();

const endGame = () => {
  //! create window pop up
  // display the no. of customers served, totalEarned, correctTotal, discrepancy values
  // create text to indicate comments based on score, like so:
  //* if discrepancy (<$1, return "No scolding from boss today!")
  //* ($1<= X < $5 return "Boss wants you to pay from your own pocket :(")
  //* ($5<= X return "Boss doesn't need you to come in tomorrow anymore")
};
// endGame();
