const fillbar = (seconds) => {
  const barProgress = document.querySelector(".bar-progress");
  barProgress.style.transition = `${seconds} linear width`;
  barProgress.style.width = "100%";
  // let percent = 0;
  // const interval = setInterval(() => {
  //   barProgress.style.width = percent + "%";
  //   percent++;
  //   if (percent >= 100) {
  //     clearInterval(interval);
  //   }
  // }, (seconds * 1000) / 100);
};
