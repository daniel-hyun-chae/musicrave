export const formatTime = (time) => {
  let sec = time % 60;
  let min = ((time - sec) / 60) % 60;
  let hour = ((time - sec) / 60 - min) / 60;

  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;
  return { sec, min, hour };
};
