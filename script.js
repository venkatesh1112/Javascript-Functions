////////////////////////////////////////////
// Function Expression
var student = function () {
  console.log("I am a Student");
};
student();

//Function Declaration and Function Definition
function Teacher() {
  console.log("I am a Teacher");
}
Teacher();

///////////////////////////////////////////
// Implicit Invoking Function(IIF)
(function () {
  var name;
  var dob;
  var age = 2023 - dob;
})();

//////////////////////////////////////////
//Arrow Function
var College = (code, course) => {
  console.log("Course code is " + code + " and Course name is " + course);
};
College(223, "Computer Science and Engineering");
