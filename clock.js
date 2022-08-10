// function that starts at 05:00 and counts down when "start timer" is clicked

const minutes = () => {};

const seconds = () => {};

const time = {
  minutes: 5,
  seconds: 60,
};

const minusSec = () => {
  time.seconds--;
  console.log(time.seconds);
};

// for (time.minutes = 5; time.minutes >= 0; time.minutes--) {
if (time.seconds >= 0) {
  setInterval(minusSec, 1000);
} else if (time.seconds <= -1) {
  time.seconds = 60;
}
// }
