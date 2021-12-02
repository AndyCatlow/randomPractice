//using conditionals to check for a range of values:
function lifePhase(age) {
  if (isNaN(age) || age < 0 || age > 140) {
    return "This is not a valid age";
  } else {
    if (age >= 0 && age < 4) {
      return "baby";
    }
    if (age >= 4 && age < 13) {
      return "child";
    }
    if (age >= 13 && age < 20) {
      return "teen";
    }
    if (age >= 20 && age < 65) {
      return "adult";
    }
    if (age >= 65 && age <= 140) {
      return "senior citizen";
    }
  }
}

//could be abtracted to:
if (isNaN(age) || age < 0 || age > 140) {
  return "This is not a valid age";
} else {
  return;
  age < 3
    ? "baby"
    : age < 13
    ? "child"
    : age < 20
    ? "teen"
    : age < 65
    ? "adult"
    : age < 75
    ? "senior"
    : "elderly";
}

//example of switch case syntax:
const tipCalculator = (quality, total) => {
  switch (quality) {
    case "bad":
      return total * 0.05;
    case "ok":
      return total * 0.15;
    case "good":
      return total * 0.2;
    case "excellent":
      return total * 0.3;
    default:
      return total * 0.18;
  }
};

/****************************
 * reverse sorting an array *
 ****************************/
const reverseArray = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};
