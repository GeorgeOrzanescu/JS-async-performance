//setTimeout

setTimeout(() => {
  console.log("This is a callback function");
}, 1000);

function f1(callback) {
  console.log("I am first");
  callback();
  console.log("I am second");
  callback();
}

function callback() {
  console.log("I am the callback");
}

f1(callback);

function main(callback) {
  let x;
  setTimeout(() => {
    x = 5;
    callback(x);
  }, 600);
  console.log(
    "Program moved forward but the callback will wait for the timeout"
  );
}

function callback2(num) {
  console.log(num);
}

main(callback2);
