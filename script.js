var gradeInput = document.querySelectorAll("input");
var tableData = document.querySelectorAll("td");
var span = document.querySelector("span");
var button = document.getElementsByTagName("button")[4];

function calcTableContent(a, b, c, d) {
  if (gradeInput[a].value == "A") {
    tableData[b].textContent = 5;
  } else if (gradeInput[a].value == "B") {
    tableData[b].textContent = 4;
  } else if (gradeInput[a].value == "C") {
    tableData[b].textContent = 3;
  } else if (gradeInput[a].value == "D") {
    tableData[b].textContent = 2;
  } else if (gradeInput[a].value == "E") {
    tableData[b].textContent = 1;
  } else if (gradeInput[a].value == "F") {
    tableData[b].textContent = 0;
  }
  var point7 = Number(gradeInput[c].value) * Number(tableData[b].textContent);
  tableData[d].textContent = point7;
}

//a = gradeinputvalue table array number
//b = gradepoint table array number
//c = creditunit table array number
//d = cu*gp table array number

//first course grade
gradeInput[2].addEventListener("keyup", function() {
  calcTableContent(2, 8, 1, 9);
});

//second course grade
gradeInput[5].addEventListener("keyup", function() {
  calcTableContent(5, 13, 4, 14);
});

//third course grade
gradeInput[8].addEventListener("keyup", function() {
  calcTableContent(8, 18, 7, 19);
});

//fourth course grade
gradeInput[11].addEventListener("keyup", function() {
  calcTableContent(11, 23, 10, 24);
});

//fifth course grade
gradeInput[14].addEventListener("keyup", function() {
  calcTableContent(14, 28, 13, 29);
});

//sixth course grade
gradeInput[17].addEventListener("keyup", function() {
  calcTableContent(17, 33, 16, 34);
});

//seventh course grade
gradeInput[20].addEventListener("keyup", function() {
  calcTableContent(20, 38, 19, 39);
});

//calculate cgpa
button.addEventListener("click", function() {
  var cgpa =
    (Number(tableData[9].textContent) +
      Number(tableData[14].textContent) +
      Number(tableData[19].textContent) +
      Number(tableData[24].textContent) +
      Number(tableData[29].textContent) +
      Number(tableData[34].textContent) +
      Number(tableData[39].textContent)) /
    (Number(gradeInput[1].value) +
      Number(gradeInput[4].value) +
      Number(gradeInput[7].value) +
      Number(gradeInput[10].value) +
      Number(gradeInput[13].value) +
      Number(gradeInput[16].value) +
      Number(gradeInput[19].value));
  span.textContent = "Your CGPA is : " + cgpa;
  span.classList.add("span");
  if (cgpa >= 4.5) {
    span.style.color = "Yellow";
  } else if (cgpa >= 3.5 && cgpa < 4.5) {
    span.style.color = "green";
  } else if (cgpa < 3.5 && cgpa > 2.0) {
    span.style.color = "rgb(90, 10, 10)";
  } else {
    span.style.color = "red";
  }
});
