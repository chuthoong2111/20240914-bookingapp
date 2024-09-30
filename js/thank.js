var myCanvas = document.createElement("canvas");

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});
confetti({
  particleCount: 100,
  startVelocity: 30,
  spread: 360,
  origin: {
    x: Math.random(),
    // since they fall down, start a bit higher than random
    y: Math.random() - 0.2,
  },
});
