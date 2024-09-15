// make a variables to hold weight and height

const weightInput = document.getElementById("userWeightInput");
const heightInput = document.getElementById("userHeightInput");
const callResultLabel = document.getElementById("bmiResult");

// create a function to put them in
const bmi = (weight, height) => {
  weight = weightInput.value;
  height = heightInput.value;
  let heightSquared = height * height;
  let result = (weight / heightSquared) * 10000;
  // Output the value onto the HTML
  if (result !== result || result <= 0) {
    bmiResult.innerHTML =
      "You need to put valid information in the Height and Weight fields";
  } else if (result > 0 && result < 18.5) {
    bmiResult.innerHTML = `Your BMI is: ${result.toFixed(
      1
    )}.<br><br>Your BMI is less than 18.5, this is considered underweight`;
  } else if (result >= 18.5 && result < 25) {
    bmiResult.innerHTML = `Your BMI is: ${result.toFixed(
      1
    )}.<br><br>This is in the normal healthy weight range!`;
  } else if (result >= 25 && result < 30) {
    bmiResult.innerHTML = `Your BMI is: ${result.toFixed(
      1
    )}.<br><br>This result is considered moderately overweight`;
  } else if (result >= 30 && result < 40) {
    bmiResult.innerHTML = `Your BMI is: ${result.toFixed(
      1
    )}.<br><br>This result means you are considerably overweight`;
  } else if (result >= 40) {
    bmiResult.innerHTML = `Your BMI is: ${result.toFixed(
      1
    )}.<br><br>This result means you are severely overweight`;
  } else {
    bmiResult.innerHTML =
      "Sorry something went wrong. Please try to input your data again!";
  }
};

const reset = () => {
  userWeightInput.value = "";
  userHeightInput.value = "";
  bmiResult.innerHTML = "";
};
