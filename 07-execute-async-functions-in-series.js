// Implement a function that takes a list of async functions as input and
// executes them in a series that is one at a time. The next task is
// executed only when the previous task is completed.

function asyncTask(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Async Task ${i} `, 100 * i));
  });
}

const tasks = [
  asyncTask(1),
  asyncTask(3),
  asyncTask(2),
  asyncTask(8),
  asyncTask(6),
];

async function asyncSeriesExecutor(promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log("RESULT ", result);
    } catch (error) {
      console.log("ERROR ", error);
    }
  }
}

asyncSeriesExecutor(tasks);
