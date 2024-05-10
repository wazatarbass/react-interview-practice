// ✅ : GOOD
function myPromiseAny(promises) {
  let rejectedPromises = [];

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      // if any promise(only one) resolved it will return that
      promise
        .then((data) => resolve(data))
        .catch((error) => {
          rejectedPromises[index] = error;
          // if all the promises are rejected it will return that
          if (index === promises.length - 1) {
            reject(rejectedPromises);
          }
        });
    });
  });
}

function promise(time) {
  return new Promise((resolve, reject) => {
    if (time < 200) {
      setTimeout(() => resolve({ time, message: "Promise resolved" }), time);
    }
    setTimeout(
      () => reject({ time, message: `Promise rejected : ${time}` }),
      time
    );
  });
}

// const test1 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 500, "one");
// });
// const test2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 600, "two");
// });
// const test3 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 200, "three");
// });

const promises = [promise(500), promise(300), promise(3000)];

myPromiseAny(promises)
  .then((data) => console.log(data))
  .catch((error) => console.log("ERRORS PROMISE ANY ", error));
