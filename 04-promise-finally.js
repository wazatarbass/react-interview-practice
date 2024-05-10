// ⚠️ : NEED REVISION
Promise.prototype.finally = function (callback) {
  console.log(this);
  if (typeof callback !== "function") {
    return this.then(callback, callback);
  }

  const promise = this.constructor;

  return this.then(
    (val) => promise.resolve(callback()).then(() => val),
    (error) =>
      promise.resolve(callback()).then(() => {
        throw error;
      })
  );
};

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("Success!");
      } else {
        reject("Error!");
      }
    }, 1000);
  });
}

getData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Finished"));
