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
const boot = async () => {
    try {
      const resFirst = await start(500);
      console.log(`First result is ${resFirst}`);
      const resSecond = await start(1000);
      console.log(`Second result is ${resSecond}`);
      setTimeout(() => {
        const sumRes = resFirst + resSecond;
        console.log(`Sum results is ${sumRes}`);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  boot(); 