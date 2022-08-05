import $ from "jquery";

//===========Model/State ==================

const app = {
  dishes: {
    rice: 0.4,
    veg: 1.1,
    meat: 2.2,
    fish: 3.5,
    veggieMeat: 1.8,
    egg: 1.7,
    saltedEgg: 1.3,
    moreCurry: 0.5,
  },
};

//============View=========(static divs not included in render)

const rendertop1 = () => {};

const rendertop2 = () => {};

const rendertop3 = () => {};

const renderbot2 = () => {};

//============Controller====================

const generateCust = () => {
  // start with state of custNum= 1
  //every time the button "Return Change" is clicked, custNum+=1 because we have moved on to next customer
  //! ALERT intro & instructions if custNum===1
  //prompts if custNum is prime
  //generate random output of custOrder() in #top-1
  //generate random output img of cust in #top-2 using custImg()
  //! PROMPT injection scenario (randomly generated) if custNum can be divided by 2 or 5
  //! input field must contain 1 word related to eating with at least 7 characters
  //? is it possible to save the input and put in an array, then display in endGame()?
};

generateCust();

const main = () => {
  //upon clicking "Return Change" button, invoke addToTotal(), which is:
  // cash given will be given based on custType
  // (teen girl always gives $4, normal guy always gives $10, group always gives $50, etc)
  // cash - change = orderCalculated
  // totalEarned += orderCalculated
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
main();

const endGame = () => {
  // create window pop up
  // display the no. of customers served, totalEarned, correctTotal, discrepancy values
  // create text to indicate comments based on score, like so:
  //* if discrepancy
};
