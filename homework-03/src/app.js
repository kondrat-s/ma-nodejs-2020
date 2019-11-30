let start = 3;
let currNum = start;

function findSimple(simpl) {
  let ind = 2
  while (ind < simpl) {
    const r = simpl % ind;
    if (r === 0) {
      return false;
    }
    ind ++;
  }
  return true;
}

setInterval(() => {
  if (findSimple(start)) {
    currNum = start;
  }
  start++;
}, 0);

setInterval(() => {
  console.log(
    `${new Date().getTime()} -- IN PROCESS -- Biggest prime number found:${currNum}`,
  );
}, 1000);