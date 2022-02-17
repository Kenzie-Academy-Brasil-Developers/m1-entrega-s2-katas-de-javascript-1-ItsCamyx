function oneThroughTwenty() {
  let meuArray = [];
  for (let i = 1; i <= 20; i++) {
    meuArray.push(i);
  }
  return meuArray;
}

oneThroughTwenty();

function evensToTwenty() {
  let meuArray = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      meuArray.push(i);
    }
  }
  return meuArray;
}

evensToTwenty();

function oddsToTwenty() {
  let meuArray = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      meuArray.push(i);
    }
  }
  return meuArray;
}

oddsToTwenty();

function multiplesOfFive() {
  let meuArray = [];
  for (let i = 5; i <= 100; i++) {
    if (i % 5 == 0) {
      meuArray.push(i);
    }
  }
  return meuArray;
}

multiplesOfFive();

function squareNumbers() {
  let meuArray = [];
  for (let i = 1; i <= 100; i++) {
    const raiz = Math.sqrt(i);
    if (raiz % 1 == 0) {
      meuArray.push(i);
    }
  }
  return meuArray;
}

squareNumbers();

function countingBackwards() {
  let meuArray = [];
  for (let i = 20; i >= 1; i--) {
    meuArray.push(i);
  }
  return meuArray;
}
// function countingBackwards() {
//   let meuArray = [];
//   for (let i = 1; i <= 20; i++) {
//     meuArray.push(i);
//   }
//   meuArray.reverse();
//   return meuArray;
// }
countingBackwards();

function evenNumbersBackwards() {
  let meuArray = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      meuArray.push(i);
    }
  }
  meuArray.reverse();
  return meuArray;
}
// function evenNumbersBackwards() {
//   let meuArray = [];
//   for (let i = 20; i >= 1; i--) {
//     if (i % 2 == 0) {
//       meuArray.push(i);
//     }
//   }
//   return meuArray;
// }

evenNumbersBackwards();

function oddNumbersBackwards() {
  let meuArray = [];
  for (let i = 20; i >= 1; i--) {
    if (i % 2 !== 0) {
      meuArray.push(i);
    }
  }
  return meuArray;
}
// function oddNumbersBackwards() {
//   let meuArray = [];
//   for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//       meuArray.push(i);
//     }
//   }
//   meuArray.reverse();
//   return meuArray;
// }

oddNumbersBackwards();

function multiplesOfFiveBackwards() {
  let meuArray = [];
  for (let i = 100; i >= 5; i--) {
    if (i % 5 == 0) {
      meuArray.push(i);
    }
  }
  return meuArray;
}
// function multiplesOfFiveBackwards() {
//   let meuArray = [];
//   for (let i = 5; i <= 100; i++) {
//     if (i % 5 == 0) {
//       meuArray.push(i);
//     }
//   }
//   meuArray.reverse();
//   return meuArray;
// }

multiplesOfFiveBackwards();

function squareNumbersBackwards() {
  let meuArray = [];
  for (let i = 100; i >= 1; i--) {
    const raiz = Math.sqrt(i);
    if (raiz % 1 == 0) {
      meuArray.push(i);
    }
  }
  return meuArray;
}
// function squareNumbersBackwards() {
//   let meuArray = [];
//   for (let i = 1; i <= 100; i++) {
//     const raiz = Math.sqrt(i);
//     if (raiz % 1 == 0) {
//       meuArray.push(i);
//     }
//   }
//   meuArray.reverse();
//   return meuArray;
// }

squareNumbersBackwards();
