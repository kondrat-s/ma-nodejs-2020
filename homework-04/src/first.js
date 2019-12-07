const randFunc = () => {
    return Math.floor(Math.random() * 6);
  };

const throwDice = (doAction) => {
    const res = randFunc();
    const errMsg = 'Zero result';
    if (res === 0) {
        return doAction(new Error(errMsg));
    }
    return doAction(null, res);
};

setTimeout(() => {
  throwDice((errMsgFirst, resFirst) => {
    if (errMsgFirst) {
      console.log(errMsgFirst);
    } else {
      console.log(`First result is ${resFirst}`);
      setTimeout(() => {
        throwDice((errMsgSecond, resSecond) => {
          if (errMsgSecond) {
            console.log(errMsgSecond);
          } else {
            console.log(`Second result is ${resSecond}`);
            setTimeout(() => {
              const sumRes = resFirst + resSecond;
              console.log(`Sum results is ${sumRes}`);
            }, 700);
          }
        });
      }, 1000);
    }
  });
}, 500);