export default function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
