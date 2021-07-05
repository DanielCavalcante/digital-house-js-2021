const sumNumbers = () => {
  let result = 3;
  
  if (result == 2) {
    successCallback();
  } else {
    errorCallback();
  }
}

const successCallback = () => {
  console.log("Success! Result == 2");
}

const errorCallback = () => {
  console.log("Error! Result != 2");
}

sumNumbers();