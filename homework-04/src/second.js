const randFunc = () => {
    return Math.floor(Math.random() * 6);
  };

const start = (timeStep) => {
    return new Promise((resolve, reject) => {
        const res = randFunc();
        if (res === 0) {
            reject(new Error('Zero result'));
        return;
        }
        setTimeout(() => {
        resolve(res);
    }, timeStep);
});
};
start(500)
  .then((resFirst) => {
    console.log(`First result is ${resFirst}`);
    start(1000).then((resSecond) => {
      console.log(`Second result is ${resSecond}`);
      setTimeout(() => {
        const sumRes = resFirst + resSecond;
        console.log(`Sum results is ${sumRes}`);
      }, 1000);
    });
  })
  .catch((err) => {
    console.log(err);
  });