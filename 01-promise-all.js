// ✅ : GOOD

//#region PROMISE ALL POLYFILL 1
function myPromiseAll(promises) {
  const results = [];
  let promiseCompleted = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((data) => {
          results[index] = data;
          promiseCompleted += 1;

          if (promiseCompleted === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
//#endregion

//#region PROMISE ALL POLYFILL 2
function myPromiseAll2(promises) {
  const results = [];
  let promisesFinished = 0;

  return new Promise((resolve, reject) => {
    function processPromise(data, index) {
      results[index] = data;
      promisesFinished += 1;
      if (promisesFinished === promises.length) {
        resolve(results);
      }
    }

    promises.forEach((promise, index) => {
      if (promise instanceof Promise) {
        promise
          .then((data) => processPromise(data, index))
          .catch((error) => {
            reject(
              new Error(`Promise at index ${index} rejected: ${error.message}`)
            );
          });
      } else {
        reject(
          new Error(`Value at index ${index} is not a Promise: ${promise}`)
        );
      }
    });
  });
}
//#endregion

function promise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ time, name: "Coding Campus" });
    }, time);
  });
}

const promisesWithoutError = [promise(3000), promise(1000), promise(6000)];

const promisesWithError = [promise(1000), "promise(6000)", promise(4000)];

// POLYFILL
myPromiseAll2(promisesWithError)
  .then((data) => console.log(data))
  .catch((error) => console.log("error ", error));

// NATIVE
// Promise.all(promisesWithoutError)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
