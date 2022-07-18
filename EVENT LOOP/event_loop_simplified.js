// event loop queue FIFO
let eventLoop = [];
let _event;

eventLoop.push(callback1, callback2, callback3);


// keep going until all callbacks are processed
while (eventLoop.length > 0 ) {
  _event = eventLoop.shift();

  try {
    _event();
  } catch (err) {
    console.error(err);
  }
}


// callback to be added on event loop
function callback1() {
  console.log("CB 1");
}
function callback2() {
  console.log("CB 2");
}
function callback3() {
  console.log("CB 3");
}
