let myPromise = new Promise((resolve, reject) => {
  let sum = 1 + 3;
  if (sum == 3) {
    resolve('Success');
  } else {
    reject('Failed')
  }
})

myPromise.then((message) => {
  console.log(`Status: ${message}`)
}).catch((e) => {
  console.log(`Status: ${e}`)
})