const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];
// console.log(submissions);

function addSubmission(array, newName, newScore, newDate) {
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const object1 = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(object1);
}

// addSubmission(submissions, 'Zina', 50, '2020-11-16');
// console.log(submissions);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);

function deleteSubmissionByName(array, name) {
  const index = array.findIndex((array) => array.name == name);
  array.splice(index, 1);
}
// deleteSubmissionByName(submissions, "Jane");
// console.log(submissions);

function editSubmission(array, index, score) {
  const updateSubmission = array[index];
  if (updateSubmission.score > 60) {
    passed = true;
  } else {
    passed = false;
  }
  array[index].score = score;
  array[index].passed = passed;
}
// editSubmission(submissions, 2, 80);
// console.log(submissions);

function findSubmissionByName(array, name) {
  const submissions = array.find((element) => element.name == name);
  console.log(submissions);
  return submissions;
}
// findSubmissionByName(submissions, "Joe");
// console.log(submissions);

function findLowestScore(array) {
  let lowest = null;
  array.forEach(function (submission) {
    if (lowest === null || lowest.score > submission.score) {
      lowest = submission;
    }
  });
  return lowest;
}
// let lowest = findLowestScore(submissions);
// console.log(lowest);

function findAverageScore(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
// let averageScore = [95,77,59,88];
// console.log (findAverageScore(averageScore));

function filterPassing(array) {
  let passingScore = array.filter((submission) => submission.score >= 60);
  return passingScore;
}
//   let pass = filterPassing(submissions);
//   console.log(pass);

function filter90AndAbove(array) {
  let score90Plus = array.filter((submission) => submission.score >= 90);
  return score90Plus;
}
//   let pass = filter90AndAbove(submissions);
//   console.log(pass);
