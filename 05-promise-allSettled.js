// ✅ : GOOD
function myAllSettled(promises) {
  const processPromises = promises.map((promise) =>
    Promise.resolve(promise).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    )
  );

  return Promise.all(processPromises);
}

function promise(value) {
  const randomNumber = Math.random();
  return new Promise((resolve, reject) =>
    randomNumber > 0.5
      ? resolve({ status: "fulilled", value: value })
      : reject({ status: "rejected", value: value })
  );
}

const promises = [promise(100), promise("Hello Promise"), promise("Namaste")];
myAllSettled(promises)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Promise.all(promises)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
