// ✅ : GOOD

function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((data) => resolve(data)).catch((error) => reject(error));
    });
  });
}

function promise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ time, message: "Hello Promise Race" }), time);
  });
}

const promises = [
  promise(2000),
  promise(5000),
  promise(500),
  promise(1000),
  promise(200),
];

myPromiseRace(promises)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
