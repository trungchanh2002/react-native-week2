var f = function (resolve, reject) {
  console.log("Step 1: Calling resolve");
  resolve();
  console.log("Step 2: Calling reject");
  reject();
};

var promise = new Promise(f);

promise
  .then(function () {
    console.log("Promise resolved.");
  })
  .catch(function () {
    console.log("Promise rejected.");
  });

promise.then().catch().finally();

promise
  .then(function () {
    console.log("Successful!");
  })
  .catch(function () {
    console.log("UnSuccessful!");
  })
  .finally(function () {
    console.log("Finally!");
  });

promise
  .then(function () {
    console.log("1!");
  })
  .then(function () {
    console.log("2!");
  })
  .then(function () {
    console.log("3!");
  });

promise
  .then(function () {
    console.log(0);
    return 1;
  })
  .then(function (data) {
    console.log(data);
    return 2;
  })
  .then(function (data) {
    console.log(data);
  });

promise
  .then(function () {
    return new Promise(function (resolve) {
      setTimeout(resolve, 3000);
    });
  })
  .then(function (data) {
    console.log(data);
    return 2;
  })
  .then(function (data) {
    console.log(data);
  });

  