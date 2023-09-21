/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
  let gradeOfStudent;
  /*
   * Your task is to calculate the grade of the student
   * based on his/her score which can be found in the
   * score variable and those rules can be found in the
   * documentation of the function.
   * Store the grade in the gradeOfStudent variable.
   * Also take into consideration the documentation of the function!
   */
  // PLACE YOUR CODE BETWEEN THIS...
  if (score === NaN || score < 0 || 100 < score) return 0;
  if (90 <= score && score <= 100) {
    gradeOfStudent = 5;
  } else if (80 <= score && score <= 89) {
    gradeOfStudent = 4;
  } else if (70 <= score && score <= 79) {
    gradeOfStudent = 3;
  } else if (60 <= score && score <= 69) {
    gradeOfStudent = 2;
  } else if (score <= 59) {
    gradeOfStudent = 1;
  }
  // ...AND THIS COMMENT LINE!
  return gradeOfStudent;
}
module.exports = grade;
