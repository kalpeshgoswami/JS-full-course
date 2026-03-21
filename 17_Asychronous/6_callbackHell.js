function wakeUp(callback) {
  setTimeout(() => {
    console.log("Woke up");
    callback();
  }, 1000);
}

function brushTeeth(callback) {
  setTimeout(() => {
    console.log("Brushed teeth");
    callback();
  }, 1000);
}

function haveBreakfast(callback) {
  setTimeout(() => {
    console.log("Had breakfast");
    callback();
  }, 1000);
}

function goToWork(callback) {
  setTimeout(() => {
    console.log("Went to work");
    callback();
  }, 1000);
}

wakeUp(() => {
  brushTeeth(() => {
    haveBreakfast(() => {
      goToWork(() => {
        console.log("Day started!");
      });
    });
  });
});