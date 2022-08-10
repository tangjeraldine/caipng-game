// function that starts at 05:00 and counts down when "start timer" is clicked

const time = {
  minutes: 5,
  seconds: 6,
};

const minusSec = () => {
  time.seconds--;
  console.log("seconds", time.seconds);
};

setInterval(minusSec, 1000);

const minusMin = () => {
  time.minutes--;
  console.log("minutes", time.minutes);
};

setInterval(minusMin, 6000);
