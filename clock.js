// function that starts at 05:00 and counts down when "start timer" is clicked

const time = {
  seconds: 300,
};

const minusSec = () => {
  time.seconds--;
  console.log("seconds", time.seconds);
};

setInterval(minusSec, 1000);
